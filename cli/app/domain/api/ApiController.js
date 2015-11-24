'use strict'

var rp = require('request-promise'),
    requestConfig = require('./../../config/requestConfig.js'),
    mongoose = require('mongoose');

//debug
//require('request-debug')(rp);

var api = {};

var createBody = function (api) {
    var body = {
        api: undefined
    };
    body.api=api;
    return body;
};

module.exports = {
    get: function (apiId) {
        var options = requestConfig.getGetOptions({
            url: '/apis/' + apiId
        });
        return rp(options).then(function (body) {
            return body.api;
        });
    },
    create: function (api) {
        var options = requestConfig.getPostOptions({
            url: '/apis',
            body: createBody(api)
        });
        return rp(options).then(function (body) {
            return body.api;
        }).catch(function (err) {
            throw err;
        });
    },
    update: function (apiId, api) {
        var options = requestConfig.getPutOptions({
            url: '/apis/' + apiId,
            body: createBody(api)
        });
        return rp(options).then(function (body) {
            return true;
        }).catch(function (err) {
            console.log("" + JSON.stringify(err))
            throw err;
        });
    },
    delete: function (apiId) {
        var options = requestConfig.getDeleteOptions({
            url: '/apis/' + apiId
        });
        return rp(options).then(function (body) {
            return true;
        });
    }
};