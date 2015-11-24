'use strict'

var rp = require('request-promise'),
    requestConfig = require('./../../config/requestConfig.js'),
    mongoose = require('mongoose');

require('request-debug')(rp);

var api = {};

module.exports = {
    createApi: function (apiProperties) {
        var Api = mongoose.model('Api');
        var api = new Api(apiProperties);
        return api;
    },
    get: function (apiId) {
        var options = requestConfig.getGetOptions({
            url: '/apis/' + apiId
        });
        return rp(options).then(function (body) {
            //console.log('get '+JSON.stringify(body));
            return body.api;
        });
    },
    create: function (api) {
        var api = '{"api":{"name":"Testing API Backend","sort_order":null,"backend_protocol":"https","frontend_host":"api.data.govapi.foo.com","backend_host":"api.bar.com","balance_algorithm":"least_conn","servers":[{"host":"google.com","port":443}],"url_matches":[{"sort_order":null,"frontend_prefix":"/foo","backend_prefix":"/bar"}],"settings":{"append_query_string":"foo=bar","headers_string":"X-Foo1: Bar\\nX-Bar2: Foo","http_basic_auth":"foo:bar","require_https":"optional","disable_api_key":null,"rate_limit_mode":null,"error_templates":{},"error_data_yaml_strings":{},"rate_limits":[]},"sub_settings":[],"rewrites":[]}}';
        var options = requestConfig.getPostOptions({
            url: '/apis',
            body: JSON.parse(api)
        });
        return rp(options).then(function (body) {
            return body.api;
        }).catch(function (err) {
            throw err;
        });
    },
    update: function (apiId,api) {
        var options = requestConfig.getPutOptions({
            url: '/apis/'+apiId,
            body: JSON.parse(api)
        });
        return rp(options).then(function (body) {
            return true;
        }).catch(function (err) {
            console.log(""+JSON.stringify(err))
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