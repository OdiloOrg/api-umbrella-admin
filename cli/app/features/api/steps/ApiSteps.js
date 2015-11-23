'use strict';
var should = require('should');

var ApiSteps = function () {
    var apiController=  require("../../../domain/api/ApiController.js");

    var api={};

    this.Given(/^I want to add (.*)$/, function (apiId, callback) {
        api.id=apiId;
        callback();
    });

    this.Given(/^with (.*)$/, function (path, callback) {
        api.path=path;
        callback();
    });

    this.When(/^I call to create an API$/, function () {
        return apiController.create(api);
    });

    this.Then(/^I check that it has been added$/, function (callback) {
        callback.pending();
    });

    this.When(/^I call to get (.*)$/, function (apiName) {
        return apiController.get(apiName).then(function(resultApi){
            console.log('get');
            api=resultApi;
        });
    });

    this.Then(/^I receive an api with (.*)$/, function (name, callback) {
        api.name.should.be.eql(name);
        callback();
    });

    this.When(/^I call to delete (.*)$/, function (name) {
        return apiController.delete(name).then(function(deletedApi){
            api=deletedApi;
        });
    });

    this.Then(/^I receive that (.*) has been removed$/, function (name, callback) {
        api.name.should.be.eql(true);
        callback();
    });


    this.Given(/^I want to update (.*)$/, function (apiId, callback) {
        api.id=apiId;
        callback();
    });

    this.When(/^I call to update it$/, function () {
        return apiController.update(api).then(function(updatedApi){
            api=updatedApi;
        });
    });

    this.Then(/^I check that it has been updated$/, function (callback) {
        api.name.should.be.eql('');
        callback();
    });



}

module.exports = ApiSteps;

