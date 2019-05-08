import {generateMainString} from '../assets/DataUtils';
import {PLAY_STOP_APP} from '../actions/playStopUpdated';

const initialState = {
  "play": true,
  "strict": false,
  "score": 0,
  "pattern": generateMainString(),
  "userInput": []
}

export function singleReducer(state=initialState, action) {
    switch(action.type) {  
        case PLAY_STOP_APP:
          return {...state, play: action.payload} ;
        default:
          return state;
    }
}