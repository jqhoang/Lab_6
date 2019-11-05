<<<<<<< HEAD
var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/searchArtist', (req, res) => {
    fs.readFile('artistList.json', (err, data) => {
        if (err) {
            throw "Error in searching for artist:" + err;
        } else {
            userSearch = req.query.artistName;
            artistArray = JSON.parse(data);
            artistMatchList = [];
            for(var i = 0; i < artistArray.length ; i++) {
                if(artistArray[i].artistName.toLowerCase().includes(userSearch.toLowerCase())) {
                    artistMatchList.push(artistArray[i]);
                }
            }
            res.send(artistMatchList);
        }
    })
})

router.post('/addNewArtist', (req, res) => {
    var artistName = req.body.artistName;
    var aboutArtist = req.body.aboutArtist;
    var imageURL = req.body.imageURL;
    var newArtist = {artistName: artistName, aboutArtist: aboutArtist, imageURL: imageURL};
    fs.readFile('artistList.json', (err, data) => {
        var artistList;
        if (!err) {
            artistList = JSON.parse(data);
            artistList.push(newArtist);
        } else {
            artistList = [];
            artistList.push(newArtist);
        }
        fs.writeFileSync('artistList.json',JSON.stringify(artistList));
    });
    res.redirect(301, '/');
})

router.post('/deleteArtist/', (req,res) => {
    var index = req.body.index;
    fs.readFile('artistList.json', (err, data) => {
        if (err) {
            throw "Error in deletion:" + err;
        } 
        artistList = JSON.parse(data);
        artistList.splice(index, 1);
        fs.writeFileSync('artistList.json',JSON.stringify(artistList));
    });   
    res.redirect(301, '/'); 
})

module.exports = router;

=======
var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/searchArtist', (req, res) => {
    fs.readFile('artistList.json', (err, data) => {
        if (err) {
            throw "Error in searching for artist:" + err;
        } else {
            userSearch = req.query.artistName;
            artistArray = JSON.parse(data);
            artistMatchList = [];
            for(var i = 0; i < artistArray.length ; i++) {
                if(artistArray[i].artistName.toLowerCase().includes(userSearch.toLowerCase())) {
                    artistMatchList.push(artistArray[i]);
                }
            }
            res.send(artistMatchList);
        }
    })
})

router.post('/addNewArtist', (req, res) => {
    var artistName = req.body.artistName;
    var aboutArtist = req.body.aboutArtist;
    var imageURL = req.body.imageURL;
    var newArtist = {artistName: artistName, aboutArtist: aboutArtist, imageURL: imageURL};
    fs.readFile('artistList.json', (err, data) => {
        var artistList;
        if (!err) {
            artistList = JSON.parse(data);
            artistList.push(newArtist);
        } else {
            artistList = [];
            artistList.push(newArtist);
        }
        fs.writeFileSync('artistList.json',JSON.stringify(artistList));
    });
    res.redirect(301, '/');
})

router.post('/deleteArtist/', (req,res) => {
    var index = req.body.index;
    fs.readFile('artistList.json', (err, data) => {
        if (err) {
            throw "Error in deletion:" + err;
        } 
        artistList = JSON.parse(data);
        artistList.splice(index, 1);
        fs.writeFileSync('artistList.json',JSON.stringify(artistList));
    });   
    res.redirect(301, '/'); 
})

module.exports = router;

>>>>>>> f7f3015292fef7845dfbe618f7b05d496ca5681a
