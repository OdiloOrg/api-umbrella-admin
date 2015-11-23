'use strict'

var options = {
    url: 'https://192.168.33.10/api-umbrella/v1',
    dataType: 'json',
    method: "GET",
    rejectUnauthorized: false,
    headers: {
        'X-CSRF-Token': 'srZeEtnAavycgwJAfS/l1oOP2zsJXfQNnCAAsEA8fWk=',
        'X-Api-Key': '538PcIEEoxlmzvs2LLLiFfTdQK7kK5lUVjCGTjzu'
    }
};

var createAndMergeOptions = function (sourceOptions){
    var targetOptions = options;
    console.log('before merge '+JSON.stringify(targetOptions));
    targetOptions.method=sourceOptions.method;
    if(sourceOptions.hasOwnProperty('url')){
        targetOptions.url=targetOptions.url + sourceOptions.url;
    }

    if(sourceOptions.hasOwnProperty('json')){
        targetOptions.json=sourceOptions.json;
    }
    console.log('after merge '+JSON.stringify(targetOptions));
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

