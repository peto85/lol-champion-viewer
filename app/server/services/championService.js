var rp = require('request-promise');
var _ = require('lodash');

const apiKey = '55c36e37-12a9-44f0-a0c3-841a0f4d298e';
const region = 'euw';
const version = '6.9.1';


const ddragonURI = `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/`;

class ChampionService {

  getChampionList() {
    var reqOpts = {
      url : `https://global.api.pvp.net/api/lol/static-data/${region}/v1.2/champion?api_key=${apiKey}`,
      qs: {
        api_key: apiKey,
        champData: 'image'
      },
      json: true
    }

    // MAGIC
    return rp(reqOpts)
      .then(this.expandChampionList)
      .catch(this.handleError);

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

  handleError(error) {
    console.log(error);
  }

}

module.exports = new ChampionService();
