'use strict';

var q = require('q'),
    should = require('should');

var background = function () {
    var adminController = require("../../../domain/admin/AdminController.js");
    var apiController = require("../../../domain/api/ApiController.js");

    this.Given(/^API Gateway Admin is available$/, function () {
        return adminController.check();
    });

};

module.exports = background;