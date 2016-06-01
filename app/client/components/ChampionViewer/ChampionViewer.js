import _ from 'lodash';
import { connect } from 'react-redux'
import { fetchChampionDetailsIfNeeded } from '../actions.js'

import ChampionDetails from '../ChampionDetails/ChampionDetails.jsx'

const getSelectedChampionDetails = (championDetails, id) => {
  //let championData = JSON.parse('{"id": 412, "key": "Thresh", "name": "Thresh", "title": "the Chain Warden", "avatar": "http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/Thresh.png"}');
  //return championData;
  //return  _.find(championDetails, (obj) => obj.id == id);
  return  championDetails[id];
}

const mapStateToProps = (state) => {
  return {
    selectedChampionDetails: getSelectedChampionDetails(state.championDetails, state.selectedChampionId),
  }
}

const ChampionViewer = connect(
  mapStateToProps
)(ChampionDetails)

export default ChampionViewer;
