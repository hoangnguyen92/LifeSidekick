"use strict";

lifeSidekickApp
    .controller('WishesFeedCtrl', function ($rootScope, $scope, dataService, loading) {
        $scope.wishes = [];

        dataService.registerRefreshEvent('wishesFeed:listChanged', fetchList);

        fetchList();

        function fetchList() {
            loading.show();

            dataService.findLastWishes()
                .then(function (wishes) {
                    loading.hide();
                    $scope.wishes = wishes;
                }, function (error) {
                    loading.hide();
                    console.log(error);
                });
        }
    });