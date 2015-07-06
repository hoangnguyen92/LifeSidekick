"use strict";

lifeSidekickApp
    .controller('AboutCtrl', function($rootScope, $scope, dataService) {

        $scope.user = $rootScope.currentUser;
        $scope.max = 5;
        $scope.rate = 0;
        $scope.offers = [];

        dataService.findDoneOffersByAcceptedUser($scope.user)
            .then(function (offers) {
                $scope.offers = offers;
                var sum = 0;
                offers.forEach(function(offer) {
                    sum += offer.getRating();
                });

                $scope.rate = sum / offers.length;
            });
    });