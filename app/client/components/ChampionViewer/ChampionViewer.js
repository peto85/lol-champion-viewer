import _ from 'lodash'
import { connect } from 'react-redux'
import { fetchChampionDetailsIfNeeded } from '../actions.js'

import ChampionDetails from '../ChampionDetails/ChampionDetails.jsx'

/*
This 'container' component controls connection of the ChampionDetails component
to the redux store (state objects to be passed as props and action dispatchers passed as callbacks)
*/
const getSelectedChampionDetails = (championDetails, id) => {
  return  championDetails[id]
}

const mapStateToProps = (state) => {
  return {
    selectedChampionDetails: getSelectedChampionDetails(state.championDetails, state.selectedChampionId)
  }
}

const ChampionViewer = connect(
  mapStateToProps
)(ChampionDetails)

export default ChampionViewer
