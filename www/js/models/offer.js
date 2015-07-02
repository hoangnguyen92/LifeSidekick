"use strict";

lifeSidekickApp
    .factory("Offer", function () {
        var Offer = Parse.Object.extend("Offer", {
            // Instance methods
            getName: function () {
                return this.get("name");
            },
            setName: function (name) {
                this.set("name", name);
            },
            getDescription: function () {
                return this.get("description");
            },
            setDescription: function (description) {
                this.set("description", description);
            },
            getPrice: function () {
                return this.get("price");
            },
            setPrice: function (price) {
                this.set("price", price);
            },
            getRating: function () {
                return this.get("rating");
            },
            setRating: function (rating) {
                this.set("rating", rating);
            },
            getOwner: function () {
                return this.get("owner");
            },
            setOwner: function (owner) {
                this.set("owner", owner);
            },
            getHiredUser: function () {
                return this.get("hiredUser");
            },
            setHiredUser: function (user) {
                this.set("hiredUser", user);
            },
            getStatus: function () {
                return this.get("status");
            },
            setStatus: function (status) {
                this.set("status", status);
            },
            getInvitedUsers: function () {
                return this.get("invitedUsers");
            },
            setInvitedUsers: function (invitedUsers) {
                this.set("invitedUsers", invitedUsers);
            },
            getAcceptedUser: function () {
                return this.get("acceptedUser");
            },
            setAcceptedUser: function (acceptedUser) {
                this.set("acceptedUser", acceptedUser);
            },
            getComment: function () {
                return this.get("comment");
            },
            setComment: function (comment) {
                this.set("comment", comment);
            },
            // Instance properties go in an initialize method
            initialize: function (attrs, options) {

            }
        });

        return Offer;
    });