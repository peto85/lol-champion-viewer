import _ from 'lodash';
import { connect } from 'react-redux'
import { selectChampion } from '../actions.js'

import ChampionDetails from '../ChampionDetails/ChampionDetails.jsx'

const getSelectedChampion = (champions, id) => {

  //let championData = JSON.parse('{"id": 412, "key": "Thresh", "name": "Thresh", "title": "the Chain Warden", "avatar": "http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/Thresh.png"}');
  //return championData;
  return  _.find(champions, (obj) => obj.id == id);
}

const mapStateToProps = (state) => {
  return {
    championData: getSelectedChampion(state.championList.champions, state.selectedChampionId)
  }
}

const ChampionViewer = connect(
  mapStateToProps
)(ChampionDetails)

export default ChampionViewer;
