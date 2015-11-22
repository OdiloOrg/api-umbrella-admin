'use strict'

var q = require('q'),
    request = require('request');

module.exports = {
    check : function () {
        var deferred = q.defer();
        request.get('http://192.168.33.10/api-umbrella/v1', function (err, response, body) {
            console.log(response);
            if (response.statusCode == 403)
                deferred.reject(err);
            else deferred.resolve(res);
        });
        return deferred.promise;
    }
};