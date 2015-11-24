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


    this.When(/^I call to get an API whose id is (.*)$/, function (apiId) {
        var that = this;
        return this.apiController.get(apiId).then(function(api){
            that.api=api;
        });
    });

    this.Then(/^I receive an api with (.*) and (.*)$/, function (id,name, callback) {
        this.api.id.should.be.eql(id)
        this.api.name.should.be.eql(name);
        callback();
    });

    this.When(/^I call to delete an API whose id is (.*)$/, function (apiId) {
        this.api.id=apiId;
        var that = this;
        return this.apiController.delete(this.api.id).then(function(deleted){
            that.deleted=deleted;
        });
    });

    this.Given(/^I could not get it$/, function (callback) {
        var that = this;
        this.apiController.get(this.api.id).then(function(api){
            console.log('deleted error'+api);
            callback.fail();
        }).catch(function(err){
            console.log('deleted ok'+err);
            callback();
        });
    });


    this.Then(/^I receive that it has been removed$/, function (callback) {
        this.deleted.should.be.true();
        callback();
    });


    this.Given(/^I want to update (.*)$/, function (apiId, callback) {
        api.id=apiId;
        callback();
    });

    this.When(/^I call to update it$/, function () {
    });

    this.Then(/^I check that it has been updated$/, function (callback) {
        api.name.should.be.eql('');
        callback();
    });


    this.When(/^I call to update API "([^"]*)" from file "([^"]*)"$/, function (apiId, resource) {
        this.api.id=apiId;
        var that = this;
        return this.loadFile(resource).then(function(api){
            return that.apiController.update(apiId,api);
        });
    });

    this.Then(/^I receive that it has been updated$/, function (callback) {
        callback();
    });

    this.Then(/^I check it$/, function () {
        var that = this;
        return this.apiController.get(this.api.id).then(function(api){
            that.api.id.should.be.eql(api.id);
        });
    });



}

module.exports = ApiSteps;

