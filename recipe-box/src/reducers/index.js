import { combineReducers } from 'redux';
import {headerReducer} from './headerReducer';
import {contentReducer} from './contentReducer';
import {dialogReducer} from './dialogReducer';

const rootReducer = combineReducers({
    header: headerReducer,
    content: contentReducer,
    dialog: dialogReducer
});

export default rootReducer;
