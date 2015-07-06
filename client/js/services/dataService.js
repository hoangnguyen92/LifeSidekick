"use strict";

lifeSidekickApp
    .factory("dataService", function ($rootScope, Offer, Wish, Invite) {

        var registerRefreshEvent = function (eventName, callback) {
            $rootScope.$on(eventName, function() {
                callback();
            });
        };

        // User data
        var findAllUsers = function () {
            //var myLocation = $rootScope.currentUser.get("location");

            var query = new Parse.Query(Parse.User);
            //query.near("location", myLocation);
            //query.descending("location");
            query.notEqualTo('username', $rootScope.currentUser.get("username"));

            return query.find();
        };

        // Offer data
        var baseOfferQuery = function () {
            var query = new Parse.Query(Offer);
            query.include("invitedUsers");
            query.include("owner");
            query.include("acceptedUser");
            query.descending("createdAt");

            return query;
        };

        var findOffersByAcceptedUserAndStatus = function (user, status) {
            var query = baseOfferQuery();

            query.equalTo("acceptedUser", user);

            if (status != null) {
                query.equalTo("status", status);
            }

            return query.find();
        };

        var findDoneOffersByAcceptedUser = function (user) {
            return findOffersByAcceptedUserAndStatus(user, "done");
        };

        var findPendingOffersByAcceptedUser = function (user) {
            return findOffersByAcceptedUserAndStatus(user, "pending");
        };

        var findOffersByUser = function (user) {
            var query = baseOfferQuery();
            query.equalTo("owner", user);

            return query.find();
        };

        var findOfferById = function (offerId) {
            var query = baseOfferQuery();

            return query.get(offerId);
        };

        var findLastOffers = function () {
            var query = baseOfferQuery();
            query.equalTo("private", false);

            return query.find();
        };

        // Wish data
        var baseWishQuery = function () {
            var query = new Parse.Query(Wish);
            query.include("owner");
            query.descending("createdAt");

            return query;
        };

        var findLastWishes = function () {
            var query = baseWishQuery();

            return query.find();
        };

        var findWishById = function (wishId) {
            var query = baseWishQuery();

            return query.get(wishId);
        };

        var findWishesByUser = function (user) {
            var query = baseWishQuery();
            query.equalTo("owner", user);

            return query.find();
        };

        //Invite data
        var baseInviteQuery = function () {
            var query = new Parse.Query(Invite);
            query.include("offer");
            query.include("offer.owner");
            query.include("invitedUser");
            query.descending("createdAt");

            return query;
        };

        var findInvitesByInvitedUser = function (invitedUser) {
            var query = baseInviteQuery();

            query.equalTo("invitedUser", invitedUser);

            return query.find();
        };

        var findInvitesByOffer = function (offer) {
            var query = baseInviteQuery();

            query.equalTo("offer", offer);

            return query.find();
        };


        return {
            registerRefreshEvent: registerRefreshEvent,

            findAllUsers: findAllUsers,

            findOfferById: findOfferById,
            findLastOffers: findLastOffers,
            findDoneOffersByAcceptedUser: findDoneOffersByAcceptedUser,
            findPendingOffersByAcceptedUser: findPendingOffersByAcceptedUser,
            findOffersByUser: findOffersByUser,

            findLastWishes: findLastWishes,
            findWishById: findWishById,
            findWishesByUser: findWishesByUser,

            findInvitesByInvitedUser: findInvitesByInvitedUser,
            findInvitesByOffer: findInvitesByOffer
        }
    });