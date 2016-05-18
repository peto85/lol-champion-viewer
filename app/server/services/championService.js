var rp = require('request-promise');
var _ = require('lodash');

const apiKey = '55c36e37-12a9-44f0-a0c3-841a0f4d298e';
const region = 'euw';

class ChampionService {

  getChampions(filter = null) {

    var reqOpts = {
      url : `https://global.api.pvp.net/api/lol/static-data/${region}/v1.2/champion?api_key=${apiKey}`,
      json: true
    }

    // MAGIC
    return rp(reqOpts)
      .then(this.filterChampions.bind(null, filter))
      .catch(this.handleError);

  }

  filterChampions(filterQuery, jsonData) {
    if (filterQuery) {
      console.log('>> Filtering by: ' + filterQuery);
      var filteredJson = _.filter(jsonData.data, o => _.includes(o.name.toLowerCase(), filterQuery.toLowerCase()));
      return filteredJson;
    } else {
      return _.toArray(jsonData.data);
    }
  }

  handleError(error) {
    console.log(error);
  }

}

module.exports = new ChampionService();
