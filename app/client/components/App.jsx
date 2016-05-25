import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store.js';

import ChampionSelector from './ChampionSelector/ChampionSelector.js';
import ChampionViewer from './ChampionViewer/ChampionViewer.js';

import { fetchChampionListIfNeeded } from './actions.js';

class App extends React.Component {

  componentDidMount() {
    store.dispatch(fetchChampionListIfNeeded());
  }

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
