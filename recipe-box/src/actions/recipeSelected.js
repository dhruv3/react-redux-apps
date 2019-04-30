export const UPDATE_SELECTED_RECIPE = 'UPDATE_SELECTED_RECIPE';

export function updateSelectedRecipe(index=-1){
  return{
    type: UPDATE_SELECTED_RECIPE,
    payload: index
  }
}