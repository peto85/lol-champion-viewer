const initialState = {
  selectedChampionId = null,
  champions: []
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_CHAMPION:
      return Object.assign({}, state, {
        selectedChampionId : action.id
      });
    default:
      return state;
  }
}
