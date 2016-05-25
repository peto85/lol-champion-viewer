import { combineReducers } from 'redux'
import * as Actions from './actions'


const initialState = {
  selectedChampionId: null,
  championList: {
    isFetching: false,
    champions : []
  }
}

function selectedChampionId(state = initialState.selectedChampionId, action) {
  switch (action.type) {
    case Actions.SELECT_CHAMPION:
      return action.id;
    default:
      return state;
  }
}

function championList(state = initialState.championList, action) {
  switch (action.type) {
   case Actions.REQUEST_CHAMPION_LIST:
    return Object.assign({}, state, {
      isFetching: true,
      champions: []
    });
   case Actions.RECEIVE_CHAMPION_LIST:
    return Object.assign({}, state, {
      isFetching: false,
      champions: action.champions
    });
   default:
     return state;
  }
}

const appReducer = combineReducers({
  selectedChampionId,
  championList
});

export default appReducer;
