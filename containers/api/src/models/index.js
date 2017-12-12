"use strict";

var promise = require('bluebird');

var js = require('./js');
var options = {
    promiseLib: promise
    , extend(obj, dc) {
        obj.deals = new js.Deals(obj, pgp);
    }, extend(obj, dc) {
        obj.users = new js.Users(obj, pgp);
    }
};

const pgp = require('pg-promise')(options);
const db = pgp(process.env.DATABASE_URL);

// For testing purposes only
db.connect()
    .then(obj => {
        console.log('Established kai_db connection!');
        obj.done(); // success, release the connection;
    })
    .catch(error => {
        console.log('Error connecting to kai_db:', error.message || error);
    });
// End for testing purposes only

module.exports = db;
