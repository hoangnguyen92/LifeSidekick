"use strict";

lifeSidekickApp
    .controller('HistoryCtrl', function($rootScope, $scope, dataService, loading) {
        $scope.offers = [];
        $scope.max = 5;

        fetchList();

        function fetchList() {
            loading.show();
            dataService.findDoneOffersByAcceptedUser($rootScope.currentUser)
                .then(function (offers) {
                    loading.hide();
                    $scope.offers = offers;
                }, function (error) {
                    loading.hide();
                    console.log(error);
                });
        }
    });