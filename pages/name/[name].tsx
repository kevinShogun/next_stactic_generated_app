import { Grid } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useState, useEffect } from "react";
import { pokeApi } from "../../api";
import {
	SinglePokemonImage,
	SinglePokemonMoves,
	SinglePokemonStats,
} from "../../components/pokemon";
import { Pokemon, PokemonListResp } from "../../interfaces";
import { Layout } from "../../layouts";
import { getPokemonInfo } from "../../utils";
import localFavorites from "../../utils/localFavorites";

interface Props {
	pokemon: Pokemon;
}

const PokemonNamePage: NextPage<Props> = ({ pokemon }) => {
	const [isInFavorites, setIsInFavorites] = useState<boolean>(false);

	const toggleFavorites = () => {
		localFavorites.toggleFavorite(pokemon.id);
		setIsInFavorites(!isInFavorites);

		if (isInFavorites) return;

		confetti({
			zIndex: 999,
			particleCount: 200,
			spread: 160,
			angle: -100,
			origin: {
				x: 1,
				y: 0,
			},
		});
	};

	useEffect(() => {
		setIsInFavorites(localFavorites.isFavorite(pokemon.id));
	}, [pokemon.id]);

	return (
		<Layout title={pokemon.name}>
			<Grid.Container
				css={{
					marginTop: "5px",
				}}
				gap={2}
			>
				<SinglePokemonImage pokemon={pokemon} />
				<SinglePokemonMoves
					pokemon={pokemon}
					isInFavorites={isInFavorites}
					toggleFavorites={toggleFavorites}
				/>
				<SinglePokemonStats pokemon={pokemon} />
			</Grid.Container>
		</Layout>
	);
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const { data } = await pokeApi.get<PokemonListResp>("/pokedex/5");
	const pokemonsIds = data.pokemon_entries.map((p) =>
		p.pokemon_species.name === "wormadam"
			? "wormadam-plant"
			: p.pokemon_species.name
	);
	return {
		paths: pokemonsIds.map((name) => ({ params: { name } })),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { name } = params as { name: string };

	return {
		props: {
			pokemon: await getPokemonInfo(name),
		},
	};
};

export default PokemonNamePage;
