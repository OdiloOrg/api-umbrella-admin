'use strict'

var Q = require('q'),
    request = require('request');

module.exports = {
    app:null,
    init:function(){
        this.app=require('../../app.js');
        console.log("application initialized");
    },
    check: function () {
        return Q.nfcall(request.get, 'http://192.168.33.10/api-umbrella/v1').then(function (response,body) {
            if (response[0].statusCode != 403)
                throw new Error("not available");
            return true;
        }).catch(function(err){
            throw err;
        });
    }
};