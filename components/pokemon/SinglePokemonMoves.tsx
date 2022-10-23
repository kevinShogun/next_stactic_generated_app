import { Grid, Card, Button, Text } from "@nextui-org/react"
import { Pokemon } from "../../interfaces"

interface Props {
    pokemon: Pokemon;
    isInFavorites: boolean;
    toggleFavorites: () => void;
}

export const SinglePokemonMoves = ({pokemon, isInFavorites, toggleFavorites}:Props) => {
  return (
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
            <Button
                color="gradient"
                ghost={!isInFavorites}
                onPress={toggleFavorites}
            >
                {!isInFavorites ? "Agregar a favoritos" : "En favoritos"}
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

  )
}
