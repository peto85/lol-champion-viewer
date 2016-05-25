import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './reducer.js';

import ChampionSelector from './ChampionSelector/ChampionSelector.js';
import ChampionViewer from './ChampionViewer/ChampionViewer.js';

let store = createStore(appReducer);

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div className='appContainer row'>
          <h1 className='text-center'>LoL Champion App</h1>
          <ChampionSelector />
          <ChampionViewer />
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

module.exports = App;
