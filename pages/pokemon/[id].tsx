import {
	Button,
	Card,
	Container,
	Grid,
	Image,
	Text,
	useTheme,
} from "@nextui-org/react";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import React from "react";
import { pokeApi } from "../../api";
import { Chart } from "../../components/Chart";
import { Pokemon, PokemonListResp } from "../../interfaces";
import { Layout } from "../../layouts";

interface Props {
	pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
	const router = useRouter();
	const { isDark } = useTheme();
	const data = {
		labels: ["mon", "tus", "day"],
		datasets: [
			{
				label: "My First Dataset",
				data: [65, 59, 80, 81, 56, 55, 40],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(255, 159, 64, 0.2)",
					"rgba(255, 205, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(201, 203, 207, 0.2)",
				],
				borderColor: [
					"rgb(255, 99, 132)",
					"rgb(255, 159, 64)",
					"rgb(255, 205, 86)",
					"rgb(75, 192, 192)",
					"rgb(54, 162, 235)",
					"rgb(153, 102, 255)",
					"rgb(201, 203, 207)",
				],
				borderWidth: 1,
			},
		],
	};
	return (
		<Layout title="algun pokemon">
			<Grid.Container
				css={{
					marginTop: "5px",
				}}
				gap={2}
			>
				<Grid xs={12} sm={4}>
					<Card isHoverable css={{ padding: "30px" }}>
						<Card.Body>
							<Card.Image
								src={
									pokemon.sprites.other?.["official-artwork"].front_default ||
									"no-image"
								}
								alt={pokemon.name}
								width="100%"
								height="100%"

							/>
						</Card.Body>
					</Card>
				</Grid>

				<Grid xs={12} sm={8}>
					<Card>
						<Card.Header className="card-header-style">
							<Text
								h1
								transform="capitalize"
								css={{
									color: "$accents8",
								}}
							>
								{" "}
								{pokemon.name}
							</Text>
							<Button color="gradient" ghost>
								Agregar a favoritos
							</Button>
						</Card.Header>
						<Card.Body>
							<Text
								size={25}
								css={{
									fontWeight: "$medium",
									color: "$accents7",
								}}
							>
								Moveset
							</Text>
							<Grid.Container
								css={{
									marginTop: "5px",
								}}
							>
								{pokemon.moves.map((move, index) => (
									<Grid xs={4} sm={2} key={index}>
										<Text
											css={{
												margin: "5px",
												fontWeight: "$medium",
												color: "$accents7",
												fontSize: "14px",
											}}
											transform="capitalize"
										>
											{move.move.name.replace("-", " ")}
										</Text>
									</Grid>
								))}
							</Grid.Container>
						</Card.Body>
					</Card>
				</Grid>

				<Grid xs={12} sm={12}>
					<Card>
						<Card.Header>
							<Text
								h2
								css={{
									color: "$accents8",
								}}
							>
								Sprites
							</Text>
						</Card.Header>
						<Card.Body
							css={{
								display: "flex",
								flexDirection: "column",
							}}
						>
							<Container
								css={{
									display: "flex",
								}}
							>
								<Image
									src={pokemon.sprites.front_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.front_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
							</Container>
							<Text
								h2
								css={{
									color: "$accents8",
								}}
							>
								Stats
							</Text>
							<Container>
								<Chart stats={pokemon.stats} />
							</Container>
						</Card.Body>
					</Card>
				</Grid>
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
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as { id: string };
	const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

	return {
		props: {
			pokemon: data,
		},
	};
};
export default PokemonPage;
