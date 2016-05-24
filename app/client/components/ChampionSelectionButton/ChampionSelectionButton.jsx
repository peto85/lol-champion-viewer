import React, {PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

const ChampionSelectionButton = ({ championData, onClickHandler }) => (
  <div className='grid-item' styleName='btn' onClick={onClickHandler}>
    <img styleName='img' src={championData.avatar}/>
    <p styleName='name'>{championData.name}</p>
  </div>
)

ChampionSelectionButton.propTypes = {
  championData: PropTypes.object.isRequired,
  onClickHandler: PropTypes.func.isRequired
}

export default CSSModules(ChampionSelectionButton, styles);
