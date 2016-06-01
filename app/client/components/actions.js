import $ from 'jquery'
import Promise from 'bluebird'
import _ from 'lodash'

/*
 * Redux Actions
 */

// UI ACTION CREATORS (SYNC)
export const SELECT_CHAMPION = 'SELECT_CHAMPION'
export function selectChampion(id) {
  return { type: SELECT_CHAMPION, id }
}

// API CALLS ACTION CREATORS (SYNC)
export const REQUEST_CHAMPION_LIST = 'REQUEST_CHAMPION_LIST'
export function requestChampionList() {
  return { type: REQUEST_CHAMPION_LIST }
}

export const RECEIVE_CHAMPION_LIST = 'RECEIVE_CHAMPION_LIST'
export function receiveChampionList(champions) {
  return { type: RECEIVE_CHAMPION_LIST, champions }
}

export const REQUEST_CHAMPION_DETAILS = 'REQUEST_CHAMPION_DETAILS'
export function requestChampionDetails(id) {
  return { type: REQUEST_CHAMPION_DETAILS, id }
}

export const RECEIVE_CHAMPION_DETAILS = 'RECEIVE_CHAMPION_DETAILS'
export function receiveChampionDetails(id, details) {
  return { type: RECEIVE_CHAMPION_DETAILS, id, details }
}


// API CALLS ACTION CREATORS (ASYNC)
export function fetchChampionList() {
  return dispatch => {
    dispatch(requestChampionList())
    return Promise.resolve($.getJSON('http://localhost:3000/api/champion'))
      .then(champions => dispatch(receiveChampionList(champions)))
      .catch(() => console.log('error on request to server'))
  }
}

export function fetchChampionListIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchChampionList(getState())) {
      return dispatch(fetchChampionList())
    } else {
      return Promise.resolve()
    }
  }
}

export function fetchChampionDetails(id) {
  return dispatch => {
    dispatch(requestChampionDetails(id))
    return Promise.resolve($.getJSON(`http://localhost:3000/api/champion/${id}`))
      .then(details => dispatch(receiveChampionDetails(id, details)))
      .catch(() => console.log('error on request to server'))
  }
}

export function fetchChampionDetailsIfNeeded(id) {
  return (dispatch, getState) => {
    if (shouldFetchChampionDetails(getState(), id)) {
      return dispatch(fetchChampionDetails(id))
    } else {
      return Promise.resolve()
    }
  }
}


// HELPER FUNCTIONS
function shouldFetchChampionList(state) {
  // Only fetch champions if state does not contain any and they are not being fetched already
  if (!state.championList.isFetching && _.isEmpty(state.championList.champions)) {
    return true
  } else {
    return false
  }
}

function shouldFetchChampionDetails(state, id) {
  // Only fetch champion details if state does not contain details for that specific champion
  // and they are not being fetched
  if (!_.has(state.championDetails,id) || (!state.championDetails[id].isFetching && _.isEmpty(state.championDetails[id].details))) {
    return true
  } else {
    return false
  }
}
