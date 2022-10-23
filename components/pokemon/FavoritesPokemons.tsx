import { Grid, Card } from "@nextui-org/react";
import { FavoritesCard } from "./FavoritesCard";

interface Props {
	favoritesPokemons: number[];
}

export const FavoritesPokemons = ({ favoritesPokemons }: Props) => {
	return (
		<Grid.Container gap={2} direction="row" justify="flex-start">
			{favoritesPokemons.map((f) => (
				<FavoritesCard key={f} id={f} />
			))}
		</Grid.Container>
	);
};
