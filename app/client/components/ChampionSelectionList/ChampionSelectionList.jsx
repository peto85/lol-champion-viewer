import React, {PropTypes} from 'react';
import _ from 'lodash';
import Masonry from 'react-masonry-component';

import CSSModules from 'react-css-modules';
import styles from './styles.css';

import ChampionSelectionButton from '../ChampionSelectionButton/ChampionSelectionButton.jsx';

const ChampionSelectionList = ({ champions, onClickHandler }) => {

  if (_.isEmpty(champions)) {
    return (
      <div className='col-xs-6'>
        <h2 clasName='text-center'>Champion List</h2>
        <p>LOADING...</p>
      </div>
    )
  } else {
    let listItems = champions.map(
      (champion, i) => {
        return (
          <ChampionSelectionButton
            className='grid-item'
            key={i}
            championData={champion}
            onClickCB={ () => onClickHandler(champion.id) }
          />
        );
      }
    );

    var masonryOptions = {
      transitionDuration: '0.1s',
      columnWidth: 120,
      gutter: 10,
      fitWidth: true
    };

    return (
      <div className='col-xs-6'>
        <h2 clasName='text-center'>Champion List</h2>
          <Masonry
               className={'grid'}
               styleName={'listContainer'}
               elementType={'div'}
               options={masonryOptions}
               disableImagesLoaded={false}
           >
               {listItems}
           </Masonry>
      </div>
    )
  }
}

ChampionSelectionList.propTypes = {
  champions: PropTypes.array.isRequired,
  onClickHandler: PropTypes.func.isRequired
}

export default CSSModules(ChampionSelectionList, styles);
