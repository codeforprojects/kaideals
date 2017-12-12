"use strict";

const models = require('../models');

exports.get_deals = function(req, res, next) {
    models.deals.find().then(data => {
        res.json(data);
    });
};

exports.create_deal = function(req, res, next) {
    console.log('POST /api/deals');
    res.sendStatus(200);

};

exports.discover_contributors = function(req, res) {
    // path = /coders

    // add the the last path in your route to the below array
    // ie 'patrick' would allow the path '/api/coders/patrick' to be called

    // this route is called by the contributor page to get a list of routes to call.
    // if your route is correctly in the list it then render the data you send back

    // test out this path by checkout typing: curl http://localhost:8000/api/coders

    const coders = ['patrick'];

    res.json({coders})
};


exports.patrick = function(req, res) {

    res.json({

        name: "Ice Cream",
        github_username: "musedivision",
        quote: "Reality is that which, when you stop believing in it, doesn't go away.",
        quote_author: "Philip K Dick"

    })

};

exports.user = function(req, res) {

    models.users.find(req.params.id).then(data => {
        res.json(data);
    });

};
