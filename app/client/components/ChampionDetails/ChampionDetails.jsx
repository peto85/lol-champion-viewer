import React, {PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

const ChampionDetails = ({ selectedChampionDetails }) => {

  let championDetailsDOM;
  if (!selectedChampionDetails) {
    championDetailsDOM =
      <p>-- Please select a champion --</p>
  } else if (selectedChampionDetails.isFetching) {
    championDetailsDOM =
      <p> .. LOADING .. </p>
  } else {
    championDetailsDOM = (
      <div>
        <p>NAME: { selectedChampionDetails.details.name }</p>
        <p>ATTACK: { selectedChampionDetails.details.info.attack }</p>
        <p>DEFENSE: { selectedChampionDetails.details.info.defense }</p>
        <p>MAGIC: { selectedChampionDetails.details.info.magic }</p>
        <p>DIFFICULTY: { selectedChampionDetails.details.info.difficulty }</p>
      </div>
    )
  }

  return (
    <div className='col-xs-6'>
      <h2 clasName='text-center'>Champion details</h2>
      { championDetailsDOM }
    </div>
  )
}

ChampionDetails.propTypes = {
  selectedChampionDetails: PropTypes.object
}

export default CSSModules(ChampionDetails, styles);
