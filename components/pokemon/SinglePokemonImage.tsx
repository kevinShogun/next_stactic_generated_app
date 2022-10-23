import { Grid, Card } from '@nextui-org/react'
import { Pokemon } from '../../interfaces'

interface Props {
    pokemon: Pokemon;
}

export const SinglePokemonImage = ({pokemon}:Props) => {
  return (
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
  )
}
