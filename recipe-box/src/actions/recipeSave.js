export const SAVE_RECIPE = 'SAVE_RECIPE';
export const SAVE_EDIT_RECIPE = 'SAVE_EDIT_RECIPE';

export function saveRecipe(data, mode, selIndex){
  if(mode === "edit"){
    return{
      type: SAVE_EDIT_RECIPE,
      payload: data,
      index: selIndex
    }
  }
  else{
    return{
      type: SAVE_RECIPE,
      payload: data
    }
  }
}