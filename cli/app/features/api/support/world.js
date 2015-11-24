'use strict';

var fs = require('fs'),
    Q = require('q');

var resourcesPath = 'app/features/resources/';

function World() {

    this.apiController=  require("../../../domain/api/ApiController.js");
    this.api={};
    this.loadFile = function (fileName) {
        var deferred = Q.defer();
        var that=this;
        fs.readFile(resourcesPath + fileName, function (err, data) {
            if (err) return deferred.reject(err);
            deferred.resolve(data);
        });
        return deferred.promise;
    };



};

module.exports = function() {
    this.World = World;
};