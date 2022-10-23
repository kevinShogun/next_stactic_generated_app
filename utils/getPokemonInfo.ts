import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';

export const getPokemonInfo = async(nameOrId:string) => { 
    
	const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

	return {
		id: data.id,
		moves: data.moves,
		name: data.name,
		sprites: data.sprites,
		stats: data.stats
	}
 }