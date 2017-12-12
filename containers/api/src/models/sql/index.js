'use strict';

const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

module.exports = {
    Deals: {
        add: sql('deals/add.sql')
        , find: sql('deals/find.sql')
    },
    Users: {
        add: sql('users/add.sql')
        , find: sql('users/find.sql')
    }
};

function sql(file) {
    const fullPath = path.join(__dirname, file);

    const options = {
        minify: true
        , params: {
            schema: 'public'
        }
    };

    const qf = new QueryFile(fullPath, options);
    if (qf.error) {
        console.error(qf.error);
    }

    return qf;
}
