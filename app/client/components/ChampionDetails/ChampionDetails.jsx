import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

class ChampionDetails extends React.Component {

  render() {
    return (
      <div className='col-xs-6'>
        <h2 clasName='text-center'>Champion details</h2>
        <p>something here</p>
      </div>
    )
  }
}

export default CSSModules(ChampionDetails, styles);
