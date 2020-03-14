import ActionType from './globalActionType';
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import API from '../../service';

const globalState = {
    pokemonTypes: [],
    pokemonOwned: [],
    pokemonOwnedCount: [],
    pokemonSpecies: [],
    pokemon: []
}

//reducer 
function rootReducer(state = globalState, action) {
    switch (action.type) {
        case ActionType.GET_POKEMON_TYPES:
            return {
                ...state,
                pokemonTypes: action.pokemonTypes,
            };
        case ActionType.GET_POKEMON_OWNED:
        return {
            ...state,
            pokemonOwned: action.pokemonOwned,
        };
        case ActionType.GET_POKEMON_OWNED_COUNT:
        return {
            ...state,
            pokemonOwnedCount: action.pokemonOwnedCount,
        };
        case ActionType.GET_POKEMON_SPECIES:
        return {
            ...state,
            pokemonSpecies: action.pokemonSpecies,
        };
        case ActionType.GET_POKEMON:
            return {
                ...state,
                pokemon: action.pokemon,
            };        
        default:
            return state
    }
}

export const getInitalData = () => async dispatch => {
    try {
        let pokemonTypes = await API.getPokemonTypes();
        dispatch({ type: ActionType.GET_POKEMON_TYPES, pokemonTypes });
        let pokemonOwned = await API.getPokemonOwned();
        dispatch({ type: ActionType.GET_POKEMON_OWNED, pokemonOwned });
        let pokemonOwnedCount = await API.getPokemonOwnedCount();
        dispatch({ type: ActionType.GET_POKEMON_OWNED_COUNT, pokemonOwnedCount });
        let pokemonSpecies = await API.getPokemonSpecies();
        dispatch({ type: ActionType.GET_POKEMON_SPECIES, pokemonSpecies });
        let pokemon = await API.getPokemon();
        dispatch({ type: ActionType.GET_POKEMON, pokemon });
    } catch (error) {
        console.log(error);
    }
};

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;