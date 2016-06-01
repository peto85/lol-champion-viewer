import { combineReducers } from 'redux'
import * as Actions from './actions'

// Initial state
const initialState = {
  selectedChampionId: null,
  championList: {
    isFetching: false,
    champions : []
  },
  championDetails: {}
}

function selectedChampionId(state = initialState.selectedChampionId, action) {
  switch (action.type) {
    case Actions.SELECT_CHAMPION:
      return action.id
    default:
      return state
  }
}

function championList(state = initialState.championList, action) {
  switch (action.type) {
    case Actions.REQUEST_CHAMPION_LIST:
      return Object.assign({}, state, {
        isFetching: true,
        champions: []
      })
    case Actions.RECEIVE_CHAMPION_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        champions: action.champions
      })
    default:
      return state
  }
}


function championDetails(state = initialState.championDetails, action) {
  switch (action.type) {
    case Actions.REQUEST_CHAMPION_DETAILS:
      return Object.assign({}, state, {
        [action.id]: {
          isFetching: true,
          details: {}
        }
      })
    case Actions.RECEIVE_CHAMPION_DETAILS:
      return Object.assign({}, state, {
        [action.id] : {
          isFetching: false,
          details: action.details
        }
      })
    default:
      return state
  }
}

// Create reducer using 'react-redux' combineReducers()
// http://redux.js.org/docs/api/combineReducers.html
const appReducer = combineReducers({
  selectedChampionId,
  championList,
  championDetails
})

export default appReducer
