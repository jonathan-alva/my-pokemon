import ActionType from './globalActionType';
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import API from '../../service';

const globalState = {
    pokemonType: [],
}

//reducer 
function rootReducer(state = globalState, action) {
    switch (action.type) {
        case ActionType.GET_POKEMON_TYPES:
            return {
                ...state,
                pokemonType: action.pokemonType,

            };
        
        default:
            return state
    }
}

export const getInitalData = () => async dispatch => {
    try {
        let pokemonType = await API.getPokemonTypes();
        dispatch({ type: ActionType.GET_POKEMON_TYPES, pokemonType });
        
    } catch (error) {
        console.log(error);
    }
};

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;