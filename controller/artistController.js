let db = require('../model/artistModel.js');

exports.createArtistsTable = async (req, res, next) => {
    await db.createArtistsTable();
}

exports.addArtist = async (req, res, next) => {
    let name = req.body.name;
    let about = req.body.about;
    let link = req.body.link;
    await db.addArtist(name, about, link);
    //res.render('leaderboard');
}

exports.deleteArtist = async (req, res, next) => {
    let id = req.body.id;
    await db.delArtist(id);
    //res.render('leaderboard');
}

exports.searchArtists = async (req, res, next) => {
    let name = req.body.name;
    await db.searchArtists(name);
}

exports.getAllArtists = async(req, res, next) => {
    await db.getAllArtists();
}