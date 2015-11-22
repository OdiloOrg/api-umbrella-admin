'use strict'

var q = require('q'),
    request = require('request'),
    ApiModel = require('./ApiModel.js');

module.exports = {
    create: function (api) {
        var deferred = q.defer();
        var api = new ApiModel(api);
        request.post({
            url: 'http://192.168.33.10/api-umbrella/v1' + '/apis',
            json: JSON.stringify(api)
        }, function (err, response, body) {
            console.log(response);
            if (response.statusCode == 200) {
                deferred.resolve(response);
            }
            else deferred.reject(err);
        });
        return deferred.promise;
    },
    get: function (apiId) {
        var deferred = q.defer();
        request.get('http://192.168.33.10/api-umbrella/v1' + '/apis' + '/' + apiId, function (err, response, body) {
            console.log(response);
            if (response.statusCode == 200) {
                deferred.resolve(response);
            }
            else deferred.reject(err);
        });
        return deferred.promise;
    }
};