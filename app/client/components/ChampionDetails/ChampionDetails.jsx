import React, {PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

import AttributeBar from '../AttributeBar/AttributeBar.jsx';
import LoadingSpinner from '~/public/img/icon/spinner.svg';

const ChampionDetails = ({ selectedChampionDetails }) => {

  let championDetailsDOM;
  if (!selectedChampionDetails) {
    championDetailsDOM =
      <p className='text-center text-muted'>Select a champion to view its details</p>
  } else if (selectedChampionDetails.isFetching) {
    championDetailsDOM =
      <div>
        <LoadingSpinner className='center-block' width={40} height={40}/>
        <p className='text-center'>Loading</p>
      </div>
  } else {
    championDetailsDOM = (
      <div>
        <h3>{ selectedChampionDetails.details.name }</h3>
        <AttributeBar attribute='attack' value={selectedChampionDetails.details.info.attack} />
        <AttributeBar attribute='defense' value={selectedChampionDetails.details.info.defense } />
        <AttributeBar attribute='magic' value={selectedChampionDetails.details.info.magic} />
        <AttributeBar attribute='difficulty' value={selectedChampionDetails.details.info.difficulty} />
      </div>
    )
  }

  return (
    <div className='col-xs-6'>
      <h2 className='text-center'>Champion details</h2>
      <div styleName='detailsContainer'>
        { championDetailsDOM }
      </div>
    </div>
  )
}

ChampionDetails.propTypes = {
  selectedChampionDetails: PropTypes.object
}

export default CSSModules(ChampionDetails, styles);
