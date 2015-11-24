'use strict'

var baseUrl ='https://192.168.33.10/api-umbrella/v1';

var options = {
    simple:true,
    url: baseUrl,
    dataType: 'json',
    method: "GET",
    json: true,
    rejectUnauthorized: false,
    headers: {
        'X-Api-Key': '538PcIEEoxlmzvs2LLLiFfTdQK7kK5lUVjCGTjzu',
        'Cookie':'_ga=GA1.1.47687045.1444840868; _api_umbrella_session=BAh7CEkiD3Nlc3Npb25faWQGOgZFVEkiJWM4ZjA5ZGRjZTkwNWY4ZGU0OTEzYWIxMGNlNGEwZjliBjsAVEkiEF9jc3JmX3Rva2VuBjsARkkiMXViRnVMQWljNUNmcmNwRUpDM0JNcmVKUkx1Y29OUzlYSisrS0ZGRVpwR1E9BjsARkkiGndhcmRlbi51c2VyLmFkbWluLmtleQY7AFRbB1sGSSIpOTVkZTUyMjYtMzU1My00ODY1LTg4NzgtYWE4MzEwNTVmNjE4BjsAVDA%3D--1aa3a34ffc67df7b7a818cf77dbec100d52fd0ce',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'X-CSRF-Token':' ubFuLAic5CfrcpEJC3BMreJRLucoNS9XJ++KFFEZpGQ='
    }
};

var createAndMergeOptions = function (sourceOptions){
    var targetOptions = options;
    //console.log('before merge '+JSON.stringify(targetOptions));
    targetOptions.method=sourceOptions.method;
    if(sourceOptions.hasOwnProperty('url')){
        targetOptions.url=baseUrl + sourceOptions.url;
    }

    targetOptions.body=sourceOptions.body;

    //console.log('after merge '+JSON.stringify(targetOptions));
    return targetOptions;
}

var getGetOptions = function(getOptions){
    getOptions.method="GET";
    return createAndMergeOptions(getOptions);
};

var getPostOptions = function(postOptions){
    postOptions.method="POST";
    return createAndMergeOptions(postOptions);
};

var getPutOptions = function(putOptions){
    putOptions.method="PUT";
    return createAndMergeOptions(putOptions);
};

var getDeleteOptions = function(deleteOptions){
    deleteOptions.method="DELETE";
    return createAndMergeOptions(deleteOptions);
};

exports.getGetOptions = getGetOptions;
exports.getPostOptions = getPostOptions;
exports.getPutOptions = getPutOptions;
exports.getDeleteOptions = getDeleteOptions;

