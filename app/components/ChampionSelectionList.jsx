import React from 'react';
import ReactDOM from 'react-dom';

class ChampionSelectionList extends React.Component {

  getInitialState() {
    return {
      championList : ['Morgana', 'Ashe', 'Urf']
    }
  },

  render() {
    var listItems = this.props.champions.map(function(champion){
      return <li> {champion} </li>;
    });
    return (
      <div>
        <h1> Champions </h1>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
}
