export interface Pokemon {
    id: string;
    name: string;
    types: Array<{type: {name: string}}> | null;
    stats: Array<{base_stat: string, stat: {name: string}}> | null;
    image: string;
}
