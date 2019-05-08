import {generateMainString} from '../assets/DataUtils';

const initialState = {
  "play": true,
  "strict": false,
  "score": 0,
  "pattern": generateMainString(),
  "userInput": []
}

export function singleReducer(state=initialState, action) {
    switch(action.type) {   
        default:
          return state;
    }
}