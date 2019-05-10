import {generateMainString} from '../assets/DataUtils';
import {PLAY_STOP_APP} from '../actions/playStopUpdated';
import {USER_PATTERN_INP} from '../actions/userButtonPress';

const initialState = {
  "play": true,
  "strict": false,
  "score": 0,
  "pattern": generateMainString(),
  "userInput": []
}

export function singleReducer(state=initialState, action) {
    switch(action.type) {
        case USER_PATTERN_INP:
          return {...state, userInput: [...state.userInput, action.payload]} ;  
        case PLAY_STOP_APP:
          return {...state, play: action.payload} ;
        default:
          return state;
    }
}