"use strict";

lifeSidekickApp
    .controller('WishDetailCtrl', function ($scope, $state, $stateParams, loading, dataService) {
        $scope.wish = {};
        $scope.owner = {};
        $scope.progress = 0;

        $scope.navigateBack = function () {
            if ($stateParams.statePath == "my-wishes") {
                $state.go("app.profile.about.my-wishes");
            } else {
                $state.go("app.home.wishes-feed");
            }
        };

        fetchData();

        function fetchData() {
            loading.show();
            dataService.findWishById($stateParams.wishId)
                .then(function (wish) {
                    loading.hide();
                    $scope.wish = wish;
                    $scope.owner = wish.get("owner");
                    $scope.progress = (wish.get("reachedMoney") / wish.get("price")) * 100;
                }, function (error) {
                    loading.hide();
                    console.log(error);
                });
        }
    });