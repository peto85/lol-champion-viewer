import React from 'react';
import ReactDOM from 'react-dom';

class ChampionSelectionButton extends React.Component {
  render() {
    return (
      <div>
        <img />
        <span>{this.state.championName}</span>
      </div>
    )
  }
}

ReactDOM.render(<ChampionSelectionButton/>, document.getElementById('app'));
