import {FETCH_WIKI} from '../actions/index';

export default function(state = [], action){
  if(action.error === true){
    return state;
  }

  switch(action.type){
    case FETCH_WIKI:
      const arr = [];
      let mainObj = action.payload.data.query.pages;
      for (let obj in mainObj) {
        //https://stackoverflow.com/a/39333479
        let newObj = (({ pageid, title, extract }) => ({ pageid, title, extract }))(mainObj[obj]);
        arr.push(obj);
      }
      return state.concat(arr);
  }
  return state;
}
