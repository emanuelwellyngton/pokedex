export interface Pokemon {
    id: string;
    name: string;
    types: Array<{pokemon_v2_type: {name: string}}> | null;
    stats: Array<{base_stat: string, pokemon_v2_stat: {name: string}}> | null;
    image: string;
}
