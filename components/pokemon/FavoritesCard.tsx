import { Card, Grid } from "@nextui-org/react";
import Router, { useRouter } from "next/router";
interface Props {
	id: number;
}

export const FavoritesCard = ({ id }: Props) => {
	const router = useRouter();

	const onFavoriteClicked = () => {
		router.push(`pokemon/${id}`);
	};

	return (
		<Grid key={id} xs={6} sm={3} xl={1}>
			<Card
				isHoverable
				isPressable
				css={{
					padding: 10,
				}}
				onPress={onFavoriteClicked}
			>
				<Card.Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
					width={"100%"}
					height={140}
				/>
			</Card>
		</Grid>
	);
};
