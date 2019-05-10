export const USER_PATTERN_INP = 'USER_PATTERN_INP';

export function userPatternInput(inp){
  return{
    type: USER_PATTERN_INP,
    payload: inp
  }
}