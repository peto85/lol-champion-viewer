import _ from 'lodash'
import { connect } from 'react-redux'
import { selectChampion, fetchChampionDetailsIfNeeded } from '../actions.js'

/*
This 'container' component controls connection of the ChampionSelectionList component
to the redux store (state objects to be passed as props and action dispatchers passed as callbacks)
*/
import ChampionSelectionList from '../ChampionSelectionList/ChampionSelectionList.jsx'

const mapStateToProps = (state) => {
  return {
    isFetching: state.championList.isFetching,
    champions: state.championList.champions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickHandler: (id) => {
      dispatch(selectChampion(id))
      dispatch(fetchChampionDetailsIfNeeded(id))
    }
  }
}

const ChampionSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChampionSelectionList)

export default ChampionSelector
