import { Card, Grid, Row, Text, useTheme } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { SmallPokemons } from "../../interfaces";

interface Props {
	poke: SmallPokemons;
}

export const PokeCard: FC<Props> = ({ poke }) => {
	const { isDark } = useTheme();
	const router = useRouter();

	const generarLetra = () => {
		const letras: string[] = ["A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"];
		const numero: any = (Math.random() * 15).toFixed(0);
		return letras[numero];
	};
	
	const colorHEX = () => {
		if(typeof window === "undefined") return;
		
		let color = "";
		for (let i = 0; i < 6; i++) {
			color = color + generarLetra();
		}
		return "#" + color;
	};

	const pokemonClick = () => {
		if(poke.name === "wormadam") {
			router.push(`/name/wormadam-plant`);
		}else{
			router.push(`/name/${poke.name}`);
		}
	};

	return (
		<Grid xs={6} sm={3} md={2} xl={1}>
			<Card
				isHoverable
				isPressable
				onClick={pokemonClick}
				style={{
					backgroundColor: colorHEX(),
				}}
				
			>
				<Card.Body css={{ p: 1 }}>
					<Card.Image src={poke.image} width="100%" height={140} />
				</Card.Body>
				<Card.Footer
					isBlurred
					css={{
						bgBlur: "#ffffff66",
						borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.6)",
						bottom: 0,
						zIndex: 1,
					}}
				>
					<Row justify="space-between">
						<div
							style={{
								borderRadius: "50px",
								minWidth: "40px",
								backgroundColor: "#787F85",
								border: "2px solid #ECEDEE",
								padding: "2px 10px",
							}}
						>
							<Text
								css={{
									color: !isDark ? "$accents3" : "$accents9",
									fontWeight: "$semibold",
									fontSize: "$sm",
								}}
								transform="capitalize"
							>
								{poke.name}
							</Text>
						</div>

						<Text
							css={{
								color: !isDark ? "$accents4" : "$accents9",
								fontWeight: "$semibold",
								fontSize: "$sm",
							}}
						>
							# {poke.id}
						</Text>
					</Row>
				</Card.Footer>
			</Card>
		</Grid>
	);
};
