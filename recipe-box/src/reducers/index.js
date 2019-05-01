import { combineReducers } from 'redux';
import {singleReducer} from './singleReducer';

const rootReducer = combineReducers({
    content: singleReducer
});

export default rootReducer;
