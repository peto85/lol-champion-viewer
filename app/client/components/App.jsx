import React from 'react';
import ReactDOM from 'react-dom';

import ChampionSelectionList from './ChampionSelectionList/ChampionSelectionList.jsx';
import ChampionDetails from './ChampionDetails/ChampionDetails.jsx';


let champions = JSON.parse('[{"id": 412, "key": "Thresh", "name": "Thresh", "title": "the Chain Warden", "avatar": "http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/Thresh.png" }, { "id": 266, "key": "Aatrox", "name": "Aatrox", "title": "the Darkin Blade", "avatar": "http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/Aatrox.png" }, { "id": 23, "key": "Tryndamere", "name": "Tryndamere", "title": "the Barbarian King", "avatar": "http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/Tryndamere.png" }]');


class App extends React.Component {

  onClickHandler() {
    console.log('Element clicked');
  }

  render() {
    return (
      <div className='appContainer row'>
        <h1 className='text-center'>LoL Champion App</h1>
        <ChampionSelectionList champions={champions} onClickHandler={this.onClickHandler}/>
        <ChampionDetails />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

module.exports = App;
