import React, {PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

const ChampionDetails = ({ championData }) => {

  return (
    <div className='col-xs-6'>
      <h2 clasName='text-center'>Champion details</h2>

      <p>{ championData? championData.name: '' }</p>

    </div>
    )
}

ChampionDetails.propTypes = {
  championData: PropTypes.object
}


export default CSSModules(ChampionDetails, styles);
