"use strict";

lifeSidekickApp
    .controller('MyOffersCtrl', function($rootScope, $scope, $state, dataService, loading) {
        $scope.user = $rootScope.currentUser;
        $scope.offers = [];

        dataService.registerRefreshEvent('myOffers:listChanged', fetchList);

        fetchList();

        function fetchList() {
            loading.show();

            dataService.findOffersByUser($scope.user)
                .then(function (offers) {
                    loading.hide();
                    $scope.offers = offers;
                }, function (error) {
                    loading.hide();
                    console.log(error);
                });
        }
    });