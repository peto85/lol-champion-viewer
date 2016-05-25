const initialState = {
  selectedChampionId: null,
  champions: JSON.parse('[{"id": 412, "key": "Thresh", "name": "Thresh", "title": "the Chain Warden", "avatar": "http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/Thresh.png" }, { "id": 266, "key": "Aatrox", "name": "Aatrox", "title": "the Darkin Blade", "avatar": "http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/Aatrox.png" }, { "id": 23, "key": "Tryndamere", "name": "Tryndamere", "title": "the Barbarian King", "avatar": "http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/Tryndamere.png" }]')
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_CHAMPION':
      return Object.assign({}, state, {
        selectedChampionId : action.id
      });
    default:
      return state;
  }
}

export default appReducer;
