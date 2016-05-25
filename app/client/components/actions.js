import $ from 'jquery';
import Promise from 'bluebird';
import _ from 'lodash';

/*
 * Redux Actions
 */

// UI ACTION CREATORS (SYNC)
export const SELECT_CHAMPION = 'SELECT_CHAMPION'
export function selectChampion(id) {
  return { type: SELECT_CHAMPION, id }
}

// API CALLS ACTION CREATORS (SYNC)
export const REQUEST_CHAMPION_LIST = 'REQUEST_CHAMPION_LIST';
export function requestChampionList() {
  return { type: REQUEST_CHAMPION_LIST }
}

export const RECEIVE_CHAMPION_LIST = 'RECEIVE_CHAMPION_LIST';
export function receiveChampionList(champions) {
  return { type: RECEIVE_CHAMPION_LIST, champions }
}

// API CALLS ACTION CREATORS (ASYNC)
export function fetchChampionList() {
  return dispatch => {
    dispatch(requestChampionList());
    return Promise.resolve($.getJSON('http://localhost:3000/api/champion'))
      .then(champions => dispatch(receiveChampionList(champions)))
      .catch(() => console.log('error on request to server'));
  }
}

export function fetchChampionListIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchChampionList(getState())) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchChampionList())
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}

// HELPER FUNCTIONS
function shouldFetchChampionList(state) {
  // Only fetch champions if state does not contain any and they are not being fetched already
  if (!state.championList.isFetching && _.isEmpty(state.championList.champions)) {
    return true;
  } else {
    return false;
  }
}
