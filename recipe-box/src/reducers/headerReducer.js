import {UPDATE_SELECTED_RECIPE} from '../actions/recipeSelected';

export function headerReducer(state={}, action) {
    switch(action.type) {
        case UPDATE_SELECTED_RECIPE:
            if(action.payload == -1)
                return state;
            return {...state, selIndex: action.payload}

            default:
                return state;
        }
}