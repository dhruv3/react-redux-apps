import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      let newState = Object.assign({}, state);
      newState['articles'].push(action.payload);
      return newState;
    default:
      return state;
  }
};

export default rootReducer;
