"use strict";

const API_ROUTES = new Map([
    ['get_deals', { verb: 'get', url: '/deals' }],
    ['create_deal', { verb: 'post', url: '/deals' }],
    ['user', { verb: 'get', url: '/users/:id' }],
    ['discover_contributors', { verb: 'get', url: '/coders' }],


    //contributor routes
    ['patrick', { verb: 'get', url: '/coders/patrick'}]
]);

module.exports = require('./router').create(
    API_ROUTES
    , require('../views')
);
