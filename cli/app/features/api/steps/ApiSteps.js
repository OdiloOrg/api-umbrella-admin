'use strict';
var should = require('should'),
    utils = require("../../api/support/utils.js");

var ApiSteps = function () {

    this.Given(/^It exists an API with name "([^"]*)"$/, function (name) {
        var that = this;
        return utils.loadFile("exist_api_document.json").then(function (api) {
            that.api=JSON.parse(api);
            that.api.name=name;
            return that.apiController.create(that.api).then(function (createdApi) {
                that.api.name.should.be.eql(createdApi.name);
                that.api=createdApi;
            });
        });
    })

    this.When(/^I call to create an API from file "([^"]*)"$/, function (resource) {
        var that = this;
        return utils.loadFile(resource).then(function (api) {
            that.api=JSON.parse(api);
            return that.apiController.create(that.api).then(function (createdApi) {
                that.createdApi = createdApi;
            });
        });
    });

    this.Then(/^I receive that it has been created$/, function (callback) {
        this.createdApi.should.not.be.null();
        callback();
    });

    this.Then(/^I could read it$/, function () {
        var that = this;
        return this.apiController.get(this.createdApi.id).then(function (api) {
            that.createdApi.id.should.be.eql(api.id)
            that.createdApi.name.should.be.eql(api.name);
        });
    });


    this.When(/^I call to get it$/, function () {
        var that = this;
        return this.apiController.get(this.api.id).then(function (api) {
            that.receivedApi = api;
        });
    });

    this.Then(/^I receive it$/, function (callback) {
        this.api.id.should.be.eql(this.receivedApi.id)
        this.api.name.should.be.eql(this.receivedApi.name);
        callback();
    });

    this.When(/^I call to delete it$/, function () {
        var that = this;
        return this.apiController.delete(this.api.id).then(function (deleted) {
            that.deleted = deleted;
        });
    });

    this.Given(/^I could not get it$/, function (callback) {
        var that = this;
        this.apiController.get(this.api.id).then(function (api) {
            callback.fail();
        }).catch(function (err) {
            callback();
        });
    });


    this.Then(/^I receive that it has been removed$/, function (callback) {
        this.deleted.should.be.true();
        callback();
    });


    this.Given(/^I want to update (.*)$/, function (apiId, callback) {
        api.id = apiId;
        callback();
    });

    this.When(/^I call to update its name to "([^"]*)"$/, function (name) {
        this.api.name=name;
        var that = this;
        return this.apiController.update(this.api.id,this.api).then(function (update) {
            that.update = update;
        });
    });

    this.Then(/^I check that it its new name is "([^"]*)"$/, function (name) {
        return this.apiController.get(this.api.id).then(function (api) {
            api.name.should.be.eql(name);
        });
    });

    this.Then(/^I check that it has been updated$/, function (callback) {
        this.update.should.be.true();
        callback();
    });

    this.When(/^I call to update API "([^"]*)" from file "([^"]*)"$/, function (apiId, resource) {
        this.api.id = apiId;
        var that = this;
        return utils.loadFile(resource).then(function (api) {
            return that.apiController.update(apiId, api);
        });
    });

    this.Then(/^I receive that it has been updated$/, function (callback) {
        callback();
    });

    this.Then(/^I check it$/, function () {
        var that = this;
        return this.apiController.get(this.api.id).then(function (api) {
            that.api.id.should.be.eql(api.id);
        });
    });
}

module.exports = ApiSteps;

