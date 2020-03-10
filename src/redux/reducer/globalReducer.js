import ActionType from './globalActionType';
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import API from '../../service';

const globalState = {
    pokemonTypes: [],
}

//reducer 
function rootReducer(state = globalState, action) {
    switch (action.type) {
        case ActionType.GET_POKEMON_TYPES:
            return {
                ...state,
                pokemonTypes: action.pokemonTypes,

            };
        
        default:
            return state
    }
}

export const getInitalData = () => async dispatch => {
    try {
        let pokemonTypes = await API.getPokemonTypes();
        dispatch({ type: ActionType.GET_POKEMON_TYPES, pokemonTypes });
        
    } catch (error) {
        console.log(error);
    }
};

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;