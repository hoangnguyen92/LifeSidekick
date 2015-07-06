"use strict";

lifeSidekickApp
    .controller('NewOfferCtrl', function($rootScope, $scope, $state, Offer) {
        $scope.newOfferData = {};

        $scope.createNewOffer = function (newOfferData) {
            var offer = new Offer();
            offer.setName(newOfferData.name);
            offer.setDescription(newOfferData.description);
            offer.setPrice(newOfferData.price);
            offer.set("private", newOfferData.private);
            offer.setOwner($rootScope.currentUser);
            offer.setStatus("new");
            offer.setInvitedUsers([]);

            offer.save()
                .then(function (offer) {
                    $rootScope.currentUser.getOffers().push(offer);
                    $rootScope.currentUser.setOffers($rootScope.currentUser.getOffers());
                    $rootScope.currentUser.save()
                        .then(function (user) {
                            $scope.$emit('myOffers:listChanged');
                            $scope.$emit('offersFeed:listChanged');
                            $state.go("app.profile.about.my-offers");
                        }, function (error) {
                            console.log(error);
                        });
                }, function (error) {
                    console.log(error);
                });
        }
    });