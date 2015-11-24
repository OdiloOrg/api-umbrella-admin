'use strict';
var should = require('should');

var ApiSteps = function () {

    this.When(/^I call to create an API from file "([^"]*)"$/, function (resource) {
        var that = this;
        return this.loadFile(resource).then(function(api){
            return that.apiController.create(api).then(function(createdApi){
                that.api = createdApi;
            });
        });
    });

    this.Then(/^I receive that it has been created$/, function (callback) {
        this.api.should.not.be.null();
        callback();

    });

    this.Then(/^I could read it$/, function () {
        var that = this;
        return this.apiController.get(this.api.id).then(function(api){
            that.api.id.should.be.eql(api.id)
            that.api.name.should.be.eql(api.name);
        });
    });


    this.When(/^I call to create an API$/, function () {
        return this.apiController.create(api);
    });

    this.Then(/^I check that it has been added$/, function (callback) {
        callback.pending();
    });

    this.When(/^I call to get an whose id is (.*)$/, function (apiId) {
        return this.apiController.get(apiId).then(function(resultApi){
            //console.log('get\n' + api);
            api=resultApi;
        });
    });

    this.Then(/^I receive an api with (.*) and (.*)$/, function (id,name, callback) {
        api.id.should.be.eql(id)
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

