"use strict";

lifeSidekickApp
    .controller('MyWishesCtrl', function($rootScope, $scope, dataService, loading) {
        $scope.user = $rootScope.currentUser;
        $scope.wishes = [];

        dataService.registerRefreshEvent('myWishes:listChanged', fetchList);

        fetchList();

        function fetchList() {
            loading.show();

            dataService.findWishesByUser($scope.user)
                .then(function (wishes) {
                    loading.hide();
                    $scope.wishes = wishes;
                }, function (error) {
                    console.log(error)
                });
        }
    });