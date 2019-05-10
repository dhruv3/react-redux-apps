export const RUN_STATE = 'RUN_STATE';

export function runState(inp){
  return{
    type: RUN_STATE,
    payload: inp
  }
}