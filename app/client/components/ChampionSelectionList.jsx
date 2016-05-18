import React from 'react';
import $ from 'jquery';
import Promise from 'bluebird';

import ChampionSelectionButton from './ChampionSelectionButton.jsx';


class ChampionSelectionList extends React.Component {

  constructor(props) {
    super(props);

    // empty state
    this.state = {
      loading: true,
      allChampionList : [],
      currentChampionList : []
    }

  }

  getChampionList() {
    return Promise.resolve($.getJSON('http://localhost:3000/api/champion'));
  }

  gotChampionList = (data) => {
    console.log('SUCCESS when retrieving list of champions from server');
    this.setState({
      loading: false,
      allChampionList: data,
      currentChampionList: data
    });
  }

  handleError = ( errorData ) => {
    console.log('ERROR when retrieving list of champions from server');
    this.setState({
      allChampionList: [],
      currentChampionList: []
    });
  }

  componentDidMount() {
    this.getChampionList()
      .then(this.gotChampionList);
  }

  render() {

    if (this.state.loading) {
      return (
      <div>
        <h1>Champion List</h1>
          <p>-- LOADING --</p>
      </div>
      )
    } else {
      let listItems = this.state.currentChampionList.map(function(champion, i) {
        return (
          <li key={i}><ChampionSelectionButton championName={champion.name} /></li>
        );
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


  }

}
module.exports = ChampionSelectionList;
