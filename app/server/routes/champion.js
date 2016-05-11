var express = require('express');
var router = express.Router();

var ChampionController = require('../controllers/championController');

/* GET champion list endpoint */
router.get('/', function(req,res) {

    /*
    var championController = new ChampionController
    championController.getAllChampions();
    */

    return res.json(null);
});

module.exports = router;
