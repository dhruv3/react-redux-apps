import {FETCH_WIKI} from '../actions/index';
import {CLEAR_DISPLAY} from '../actions/clear_display';

export default function(state = [], action){
  if(action.error === true){
    return state;
  }

  switch(action.type){
    case FETCH_WIKI:
      //check for search term is empty string
      if(action.payload.data.query == null)
        return state;

      const arr = [];
      let mainObj = action.payload.data.query.pages;
      for (let obj in mainObj) {
        //https://stackoverflow.com/a/39333479
        let newObj = (({ pageid, title, extract }) => ({ pageid, title, extract }))(mainObj[obj]);
        arr.push(newObj);
      }
      return state.concat(arr);
    case CLEAR_DISPLAY:
      return [];
  }
  return state;
}
