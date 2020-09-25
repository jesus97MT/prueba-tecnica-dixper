import { PokemonType } from './pokemon-type';

export interface PokemonData {
    abilities: Array<object>,
    base_experience: number,
    forms: Array<object>,
    game_indices: Array<object>,
    height: number,
    held_items: Array<object>,
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    moves: Array<object>,
    name: string,
    order: number,
    species: {
        name: string,
        url: string
    },
    sprites: object,
    stats: [{
        base_stat: number,
        effort: number,
        stat: {
            name: string,
            url: string
        }
    }],
    types: [{
        slot: number
        type: PokemonType
    }],
    weight: number
}
