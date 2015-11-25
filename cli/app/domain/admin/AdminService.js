'use strict'

var rp = require('request-promise'),
    requestConfig = require('./../../config/requestConfig.js');

module.exports = {
    app: null,
    init: function () {
        this.app = require('../../app.js');
        console.log("application initialized");
    },
    check: function () {
        var options = requestConfig.getGetOptions({});
        return rp(options).then(function (response) {
        }).catch(function (err) {
            if (err.statusCode != 404)
                throw new Error("API Gateway Admin service not available.");
            return true;
        });
    }
};