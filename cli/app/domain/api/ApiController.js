'use strict'

var Q = require('q'),
    request = require('request'),
    requestConfig = require('./../../config/requestConfig.js'),
    mongoose = require('mongoose');

module.exports = {
    createApi: function (apiProperties) {
        var Api = mongoose.model('Api');
        var api = new Api(apiProperties);
        return api;
    },
    get: function (apiId) {
        console.log("apiId "+apiId);
        var options = requestConfig.getGetOptions({
            url: '/apis/' + apiId
        });
        return Q.nfcall(request.get, options).then(function (args) {
            var body = args[1];
            if (args[0].statusCode != 200) {
                throw Error(body.error);
            }
            return new Api(body);
        }).catch(function (err) {
            throw err;
        });
    },
    create: function (api) {
        var api = this.createApi(api);
        var options = requestConfig.getPostOptions({
            url: '/apis',
            json: api.toJSON()
        });
        return Q.nfcall(request.post, options).then(function (args) {
            console.log(args);
            var body = args[1];
            if (args[0].statusCode != 200) {
                throw Error(body.error);
            }
            return new Api(body);
        }).catch(function (err) {
            throw err;
        });
    },
    update: function (api) {
        var api = this.createApi(api);
        var options = requestConfig.getPutOptions({
            url: '/apis',
            json: api.toJSON()
        });
        return Q.nfcall(request.put, options).then(function (args) {
            var body = args[1];
            if (args[0].statusCode != 200) {
                throw Error(body.error);
            }
            return new Api(body);
        }).catch(function (err) {
            throw err;
        });
    },
    delete: function (apiId) {
        var options = requestConfig.getDeleteOptions({
            url: '/apis/' + apiId
        });
        return Q.nfcall(request.delete, options).then(function (args) {
            var body = args[1];
            if (args[0].statusCode != 200) {
                throw Error(body.error);
            }
            return new Api(body);
        }).catch(function (err) {
            throw err;
        });
    }
};