import { combineReducers } from 'redux';
import wikiReducer from './reducer_wiki';

const rootReducer = combineReducers({
  wiki: wikiReducer
});

export default rootReducer;
