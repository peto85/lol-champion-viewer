import React, {PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

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

export default CSSModules(ChampionSelectionButton, styles);
