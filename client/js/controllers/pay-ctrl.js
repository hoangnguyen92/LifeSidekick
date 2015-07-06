lifeSidekickApp
    .controller('PayCtrl', function ($scope, $stateParams, $state, Offer, dataService) {
        $scope.reviewData = {};
        $scope.offer = {};

        var offerId = $stateParams.offerId;

        dataService.findOfferById(offerId)
            .then(function (offer) {
                $scope.offer = offer;
            }, function (error) {
                console.log(error);
            });

        $scope.doPay = function (reviewData) {
            $scope.offer.set("comment", reviewData.comment);
            $scope.offer.set("rating", reviewData.rating);
            $scope.offer.set("status", "done");

            $scope.offer.save()
                .then(function (offer) {
                    $state.go('app.profile.about.my-offers');
                }, function (error) {
                    console.log(error);
                });
        };
    });