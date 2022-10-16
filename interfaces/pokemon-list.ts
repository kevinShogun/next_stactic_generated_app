export interface PokemonListResp {
    descriptions:    Description[];
    id:              number;
    is_main_series:  boolean;
    name:            string;
    names:           Name[];
    pokemon_entries: PokemonEntry[];
    region:          Generict;
    version_groups:  Generict[];
}

export interface Description {
    description: string;
    language:    Generict;
}

export interface Generict {
    name: string;
    url:  string;
}

export interface Name {
    language: Generict;
    name:     string;
}

export interface PokemonEntry {
    entry_number:    number;
    pokemon_species: Generict;
}

export interface SmallPokemons {
    id: string;
    name: string;
    image: string;
}