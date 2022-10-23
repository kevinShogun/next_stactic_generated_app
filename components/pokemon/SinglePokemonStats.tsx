import { Grid, Card, Container, Text, Image } from "@nextui-org/react";
import { Pokemon } from "../../interfaces";
import { Chart } from "../Chart";

interface Props {
	pokemon: Pokemon;
}

export const SinglePokemonStats = ({ pokemon }: Props) => {
	return (
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
	);
};
