"use strict";

lifeSidekickApp
    .factory("User", function () {
        Parse.User.extend({
            getUsername: function () {
                return this.get("username");
            },
            setUsername: function (username) {
                this.set("username", username);
            },
            setPassword: function (password) {
                this.set("password", password);
            },
            getEmail: function () {
                return this.get("email");
            },
            setEmail: function (email) {
                this.set("email", email);
            },
            getFullName: function () {
                return this.get("fullName");
            },
            setFullName: function (fullName) {
                this.set("fullName", fullName);
            },
            getRating: function () {
                return this.get("rating");
            },
            setRating: function (rating) {
                this.set("rating", rating);
            },
            getSkills: function () {
                return this.get("skills");
            },
            setSkills: function (skills) {
                this.set("skills", skills);
            },
            getWishes: function () {
                return this.get("wishes");
            },
            setWishes: function (wishes) {
                this.set("wishes", wishes);
            },
            getOffers: function () {
                return this.get("offers");
            },
            setOffers: function (offers) {
                this.set("offers", offers);
            }
        });

        return Parse.User;
    });