app.controller('OffersCtrl', ['$scope', 'offerService', function($scope, offerService) {
    $scope.$on('timer-tick', function(e, val) {
        $scope.timerSeconds = (Math.floor(val.millis / 1000));
    });

    $scope.offers = offerService.newOffers();


    $scope.timeUntil = function(stDate) {
        // Utility to add leading zero
        function z(n) {
            return (n < 10 ? '0' : '') + n;
        }

        // Convert string to date object
        var d = new Date(stDate);
        var diff = d - new Date();
        // Allow for previous times
        var sign = diff < 0 ? '-' : '';
        diff = Math.abs(diff);
        // Get time components
        var hours = diff / 3.6e6 | 0;
        var mins = diff % 3.6e6 / 6e4 | 0;
        var secs = Math.round(diff % 6e4 / 1e3);
        // Return formatted string
        return sign + z(hours) + ':' + z(mins) + ':' + z(secs);
    }

    $scope._timeLeft = [];

    var intervalID = window.setInterval(function() {
        for (var i = 0; i < $scope.offers.length; i++) {
            $scope._timeLeft[i] = $scope.timeUntil($scope.offers[i].endDate);
        }
        $scope.$apply();
    }, 1000);
    
    
}]);