var request = require('request');

const apiKey = '55c36e37-12a9-44f0-a0c3-841a0f4d298e';
const region = 'euw';

class ChampionController {

  getAllChampions() {

    var reqURL = `https://global.api.pvp.net/api/lol/static-data/${region}/v1.2/champion?api_key=${apiKey}`;

    request(reqURL, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body) // Show the HTML for the Google homepage.
      }
    });
    
  };

}

module.exports = ChampionController;
