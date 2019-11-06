let express = require('express');
let router = express.Router();
const artistController = require('../controller/artistController');

router.post('/createArtistsTable', artistController.createArtistsTable);

router.post('/addArtist', artistController.addArtist);

router.post('/deleteArtist', artistController.deleteArtist);

router.post('/searchArtists', artistController.searchArtists);

router.post('/getAllArtists', artistController.getAllArtists);

module.exports = router;