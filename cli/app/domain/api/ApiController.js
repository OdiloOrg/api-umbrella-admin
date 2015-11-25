'use strict'

var apiService = require('./ApiService.js');

module.exports = {
    get: function (apiId) {
        return apiService.get(apiId);
    },
    create: function (api) {
        return apiService.create(api);
    },
    update: function (apiId, api) {
        return apiService.update(apiId,api);
    },
    delete: function (apiId) {
        return apiService.delete(apiId);
    }
};