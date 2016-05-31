var rp = require('request-promise');
var _ = require('lodash');

const apiKey = '55c36e37-12a9-44f0-a0c3-841a0f4d298e';
const region = 'euw';
const version = '6.9.1';


const ddragonURI = `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/`;

class ChampionService {

  getChampionList() {
    var reqOpts = {
      url : `https://global.api.pvp.net/api/lol/static-data/${region}/v1.2/champion`,
      qs: {
        api_key: apiKey,
        champData: 'image'
      },
      json: true
    }

    // MAGIC
    return rp(reqOpts)
      .then(this.expandChampionList);

  }

  expandChampionList = ( jsonData ) => {
    var championList = _.toArray(jsonData.data);

    _.forEach(championList, function(value) {
      value.avatar = ddragonURI + value.image.full ;
      delete value.image;
      delete value.title;
    });

    return championList;
  }

  getChampionDetails(id) {
    console.log('lala');
    var reqOpts = {
      url : `https://global.api.pvp.net/api/lol/static-data/${region}/v1.2/champion/${id}`,
      qs: {
        api_key: apiKey
      },
      json: true
    }

    return rp(reqOpts);
  }

}

module.exports = new ChampionService();
