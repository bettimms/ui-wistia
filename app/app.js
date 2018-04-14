'use strict';

// Declare app level module which depends on views, and components
angular.module('mainApp', []);

(function (app) {
    function HomeController() {
        var vm = this;
        vm.options = {
            accessToken: "eebacce87545945c16dfbf561f3054539aa4d99d4171dc05e3410e79c3f3b4a6"
        }
        vm.onProgress = function (progress) {
            console.log(progress);
        }
        vm.onSuccess = function (data) {
            console.log(data);
        }
    }

    app.controller("HomeController", [HomeController]);

})(angular.module("mainApp"));
