import axios from 'axios';

const ROOT_URL = 'https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='

export const FETCH_WIKI = 'FETCH_WIKI'

export function fetchWiki(term){
  const url = ROOT_URL + `${term}`;
  const request = axios(url);

  return{
    type: FETCH_WIKI,
    payload: request
  }
}
