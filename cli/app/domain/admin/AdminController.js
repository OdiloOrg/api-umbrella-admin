'use strict'

var adminService = require('./AdminService.js');

module.exports = {
    app: null,
    init: function () {
        this.app = require('../../app.js');
        console.log("application initialized");
    },
    check: function () {
        return adminService.check();
    }
};