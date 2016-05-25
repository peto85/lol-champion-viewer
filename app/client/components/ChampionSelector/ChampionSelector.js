import _ from 'lodash';
import { connect } from 'react-redux'
import { selectChampion } from '../actions.js'

import ChampionSelectionList from '../ChampionSelectionList/ChampionSelectionList.jsx'

const mapStateToProps = (state) => {
  return {
    champions: state.champions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickHandler: (id) => {
      dispatch(selectChampion(id))
    }
  }
}

const ChampionSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChampionSelectionList)

export default ChampionSelector;