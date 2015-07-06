app.controller('WishesCtrl',['$scope','wishService', function ( $scope, wishService ) {
    
    $scope.wishes = wishService.newWishes();
    
}]);