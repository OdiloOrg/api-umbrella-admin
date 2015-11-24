'use strict';

function World() {
    this.apiController = require("../../../domain/api/ApiController.js");
    this.api = {};
};

module.exports = function () {
    this.World = World;
};