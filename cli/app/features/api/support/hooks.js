var hooks = function () {

    var adminController = require("../../../domain/admin/AdminController.js");

    this.Before(function (scenario) {
    });

    this.After(function (scenario) {
    });

    this.registerHandler('BeforeFeatures', function (event, callback) {
        console.log("before features");
        adminController.init();
        callback();
    });

    this.registerHandler('AfterFeatures', function (event, callback) {
        console.log("after features");
        //exec('vagrant halt');
        callback();
    });

};

module.exports = hooks;