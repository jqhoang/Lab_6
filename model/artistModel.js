const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'us-cdbr-iron-east-05.cleardb.net',
    user:'b19af1173a0ac7',
    database:'heroku_b25eeafa4bd74c5',
    password:'be36f133'
});

exports.createArtistsTable = async() => {
    return (await pool.promise().execute('CREATE TABLE artists( id int NOT NULL AUTO_INCREMENT, name TEXT, about TEXT, url TEXT, PRIMARY KEY (id))'));
}

exports.addArtist = async (name, about, url) => {
    await pool.promise().execute('INSERT INTO artists VALUES (' + name + ',' + about + ',' + url + ');');
    return await pool.promise().execute('SELECT id FROM artists WHERE name=' + name + ' AND about=' + about + ' AND url=' + url)       
};

exports.deleteArtist = async (id) => {
    return (await pool.promise().execute('DELETE FROM artists WHERE id =' + id ));       
};

exports.searchArtists = async(name) => {
    return (await pool.promise().execute('SELECT * FROM artists WHERE name LIKE\'' + name + '\'' ));
};

exports.getAllArtists = async() => {
    return (await pool.promise().execute('SELECT * FROM artists'));
};