export const PLAY_STOP_APP = 'PLAY_STOP_APP';

export function updatePlayState(currState){
  return{
    type: PLAY_STOP_APP,
    payload: !currState
  }
}