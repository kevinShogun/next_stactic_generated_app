import type { NextPage, GetStaticProps } from "next";
import { Grid } from "@nextui-org/react";
import { pokeApi } from "../api";
import { PokemonListResp, SmallPokemons } from "../interfaces";
import { Layout } from "../layouts";
import { PokeCard } from "../components/pokemon";
import { useRouter } from "next/router";
import Image from "next/image";

interface Props {
	pokemons: SmallPokemons[];
}

const Home: NextPage<Props> = ({ pokemons }) => {

	const router = useRouter();

	return (
		<Layout title="Lista de pokemons">
			<Grid.Container gap={2} justify="flex-start">
				{pokemons.map((poke, index) => (
					<PokeCard
						poke={poke}
						key={`${poke.id}_${index}`}
					/>
				))}
			</Grid.Container>
		</Layout>
	);
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { data } = await pokeApi.get<PokemonListResp>("/pokedex/5");

	const pokemons: SmallPokemons[] = data.pokemon_entries.map((p) => ({
		...p.pokemon_species,
		id: p.pokemon_species.url.split("/")[6],
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
			p.pokemon_species.url.split("/")[6]
		}.png`,
	}));

	return {
		props: {
			pokemons,
		},
	};
};
export default Home;
