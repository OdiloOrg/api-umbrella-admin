'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ApiSchema = new Schema({
    name: String,
    sortOrder: String,
    backendProtocol: String,
    frontendHost: String,
    backendHost: String,
    balanceAlgorithm: String,
    createdAt: String,
    updatedAt: String,
    creator: String,
    updater: String,
    servers: String,
    urlMatches: String,
    settings: String,
    subSettings: String,
    rewrites: String
});

ApiSchema.set('toJSON', { getters: true, virtuals: false });

var Api = mongoose.model('Api', ApiSchema);

