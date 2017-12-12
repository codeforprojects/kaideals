"use strict";

const sql = require('../sql').Users;

class UsersStore {
    constructor(db, pgp) {
        this.db = db;
        this.pgp = pgp;
    }

    add(deal) {

    }

    find(params) {
        return this.db.any(sql.find);
    }
}

module.exports = UsersStore;
