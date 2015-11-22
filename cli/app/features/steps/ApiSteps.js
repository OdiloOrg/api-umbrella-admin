'use strict';
var should = require('should');

var ApiSteps = function () {
    this.World = require('../support/ApiWorld');

    var api={};

    this.Given(/^I want to add (.*)$/, function (apiId, callback) {
        api.id=apiId;
        callback();
    });

    this.Given(/^with (.*)$/, function (path, callback) {
        api.path=path;
        callback();
    });

    this.When(/^I call to create an API$/, function (callback) {
        this.createApi(api).then(callback).catch(callback.fail).done();
    });

    this.Then(/^I check that it has been added$/, function (callback) {
        this.getApi(api).then(callback).catch(callback.fail).done();
    });

}

module.exports = ApiSteps;

