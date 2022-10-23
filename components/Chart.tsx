import { Text } from "@nextui-org/react";
import React, { FC, useEffect, useState } from "react";
import { Stat } from "../interfaces";
import localFavorites from "../utils/localFavorites";

interface Props {
	stats: Stat[];
}

export const Chart: FC<Props> = ({ stats }) => {
	const [widthDevice, setWidthDevice] = useState(localFavorites.setInnerWidthLocal());

	const colorStat = (stat: string) => {
		switch (stat) {
			case "hp":
				return "#048EA9";
			case "attack":
				return "#910838";
			case "defense":
				return "#0F9549";
			case "special-attack":
				return "#A66908";
			case "special-defense":
				return "#571D91";
			default:
				return "#AD007C";
		}
	};

	const widthBar = (s: Stat) => {
		if (widthDevice && widthDevice >= 970) {
			return `${s.base_stat * 4}px`;
		}

		if (widthDevice >= 682 && widthDevice < 970) {
			return `${s.base_stat * 2.7}px`;
		}
		
		if (widthDevice < 500) {
			return `${s.base_stat * 1.2}px`;
		}
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			{stats.map((s, index) => (
				<div
					key={index}
					style={{
						margin: "5px",
					}}
				>
					<Text
						css={{
							fontWeight: "$medium",
							color: "$accents8",
							fontSize: "16px",
							marginBottom: "2px",
						}}
						transform="capitalize"
					>
						{s.stat.name.replace("-", " ")}: {s.base_stat}
					</Text>
					<div
						style={{
							width: widthBar(s),
							height: "12px",
							borderRadius: "8px",
							backgroundColor: colorStat(s.stat.name),
						}}
					></div>
				</div>
			))}
		</div>
	);
};
