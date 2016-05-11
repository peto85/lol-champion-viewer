import React from 'react';
import ChampionSelectionButton from './ChampionSelectionButton.jsx';

function ChampionSelectionList(props) {

  let listItems = props.championList.map(function(championName, i) {
    return (<li key={i}><ChampionSelectionButton championName={championName} /></li>);
  });

  return (
    <div>
      <h1>Champion List</h1>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

module.exports = ChampionSelectionList;
