import React, { useEffect, useState } from "react";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { Grid } from "@nextui-org/react";
import confetti from "canvas-confetti";
import localFavorites from "../../utils/localFavorites";
import { pokeApi } from "../../api";
import { Pokemon, PokemonListResp } from "../../interfaces";
import { Layout } from "../../layouts";
import {
	SinglePokemonImage,
	SinglePokemonMoves,
	SinglePokemonStats,
} from "../../components/pokemon";
import { getPokemonInfo } from "../../utils";

interface Props {
	pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
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
	const pokemonsIds = data.pokemon_entries.map(
		(p) => p.pokemon_species.url.split("/")[6]
	);
	return {
		paths: pokemonsIds.map((id) => ({ params: { id } })),
		// fallback: false,
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as { id: string };
	const pokemon = await getPokemonInfo(id);

	if (!pokemon) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}

	return {
		props: {
			pokemon,
		},
		revalidate: 86400, // 24 hours
	};
};
export default PokemonPage;
