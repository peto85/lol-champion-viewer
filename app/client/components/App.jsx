import React from 'react';
import ReactDOM from 'react-dom';
import ChampionSelectionList from './ChampionSelectionList.jsx';

class App extends React.Component {
  render() {
    return (
      <div className='appContainer'>
        <h1>LoL Champion App</h1>
        <ChampionSelectionList championList={['Morgana', 'Ashe', 'Urf']}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

module.exports = App;
