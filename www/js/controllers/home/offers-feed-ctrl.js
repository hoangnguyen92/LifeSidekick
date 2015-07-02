lifeSidekickApp
    .controller('OffersFeedCtrl', function ($scope, popup, loading, dataService) {
        $scope.offers = [];

        dataService.registerRefreshEvent('offersFeed:listChanged', fetchList);

        $scope.onApply = function () {
            popup.confirmSimple(function () {
                console.log('To do job apply.');
            });
        };

        fetchList();

        function fetchList() {
            loading.show();

            dataService.findLastOffers()
                .then(function (offers) {
                    loading.hide();
                    $scope.offers = offers;
                }, function (error) {
                    loading.hide();
                    console.log(error);
                });
        }
    });