"use strict";

lifeSidekickApp
    .factory("Invite", function () {
        var Invite = Parse.Object.extend("Invite", {
            // Instance methods
            getInvitedUser: function () {
                return this.get("invitedUser");
            },
            setInvitedUser: function (invitedUser) {
                this.set("invitedUser", invitedUser);
            },
            getOffer: function () {
                return this.get("offer");
            },
            setOffer: function (invitedUser) {
                this.set("offer", invitedUser);
            },
            // Instance properties go in an initialize method
            initialize: function (attrs, options) {

            }
        });

        return Invite;
    });