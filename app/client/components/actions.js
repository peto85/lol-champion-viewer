/*
 * Redux Actions
 */

// UI
export const SELECT_CHAMPION = 'SELECT_CHAMPION'

// API CALLS (ASYNC)
/*
export const FETCH_CHAMPIONS_REQUEST = 'FETCH_CHAMPIONS_REQUEST';
export const FETCH_CHAMPIONS_RESPONSE = 'FETCH_CHAMPIONS_RESPONSE';
export const FETCH_CHAMPIONS_ERROR = 'FETCH_CHAMPIONS_ERROR';
*/

/*
 * Action creators
 */
export function selectChampion(id) {
  return { type: SELECT_CHAMPION, id }
}

/*
export function fetchChampionsRequest() {
  return { type: FETCH_CHAMPIONS_REQUEST }
}

export function fetchChampionsResponse(champions) {
  return { type: FETCH_CHAMPIONS_RESPONSE, champions }
}

export function fetchChampionsResponse(error) {
  return { type: FETCH_CHAMPIONS_ERROR, error }
}
*/
