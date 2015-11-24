'use strict';

var fs = require('fs'),
    Q = require('q');

var resourcesPath = 'app/features/resources/';

module.exports={
    loadFile: function (fileName) {
        var deferred = Q.defer();
        var that = this;
        fs.readFile(resourcesPath + fileName, function (err, data) {
            if (err) return deferred.reject(err);
            deferred.resolve(data);
        });
        return deferred.promise;
    }
};
