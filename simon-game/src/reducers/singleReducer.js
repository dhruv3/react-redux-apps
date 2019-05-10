import {generateMainString} from '../assets/DataUtils';
import {PLAY_STOP_APP} from '../actions/playStopUpdated';
import {USER_PATTERN_INP} from '../actions/userButtonPress';
import { UPDATE_SCORE } from '../actions/updateScore';
import { RUN_STATE } from '../actions/updateRunState';

const initialState = {
  "play": true,
  "strict": false,
  "score": 0,
  "pattern": generateMainString(),
  "userInput": [],
  "run": true
}

export function singleReducer(state=initialState, action) {
    switch(action.type) {
      case RUN_STATE:
          return {...state, run: action.payload} ;
        case UPDATE_SCORE:
          return {...state, score: action.payload} ;
        case USER_PATTERN_INP:
          return {...state, userInput: [...state.userInput, action.payload]} ;  
        case PLAY_STOP_APP:
          return {...state, play: action.payload} ;
        default:
          return state;
    }
}