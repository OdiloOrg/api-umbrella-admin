'use strict';

var Q = require('q');

var ApiWorld = function () {
    this.apiController=  require("../../domain/api/ApiController.js");

    this.createApi = function (api) {
        return this.apiController.create(api);
    }

    this.getApi = function (api) {
        return this.apiController.get(api.id);
    }
};

module.exports = ApiWorld;