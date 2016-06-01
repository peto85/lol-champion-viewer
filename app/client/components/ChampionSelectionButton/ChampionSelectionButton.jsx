import React, {PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'

/*
Renders a clickable button with an avatar image of the champion. Clicking on this
button will set the champion as selected and its details will be loaded in the
ChampionDetails component.
- championData : json with details required to render the button
- onClickCB : callback to dispatch events to the store that will be injected
    through the ChampionSelector component
*/
const ChampionSelectionButton = ({ championData, onClickCB }) => (
  <div
    className='grid-item'
    styleName='btn'
    onClick={ onClickCB }
  >
    <img styleName='img' src={championData.avatar}/>
    <p styleName='name'>{championData.name}</p>
  </div>
)

ChampionSelectionButton.propTypes = {
  championData: PropTypes.object.isRequired,
  onClickCB: PropTypes.func.isRequired
}

export default CSSModules(ChampionSelectionButton, styles)
