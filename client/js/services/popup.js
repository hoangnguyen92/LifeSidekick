"use strict";

lifeSidekickApp
    .factory("popup", function ($ionicPopup) {
        var alert = function (title, message, callback) {
            var alertPopup = $ionicPopup.alert({
                title: title,
                template: message
            });

            if (callback) {
                alertPopup.then(callback);
            }

            return alertPopup;
        };

        var errorAlert = function (message, callback) {
            return alert("Oops", message, callback);
        };

        var confirm = function (title, message, callback) {
            var confirmPopup = $ionicPopup.confirm({
                title: title,
                template: message
            });

            confirmPopup.then(callback);

            return confirmPopup;
        };

        var confirmSimple = function (callback) {
            return confirm("Confirm", "Are you sure?", callback);
        };

        return {
            alert: alert,
            errorAlert: errorAlert,
            confirm: confirm,
            confirmSimple: confirmSimple
        }
    });