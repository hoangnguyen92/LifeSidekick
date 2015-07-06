app.controller('EditProfileCtrl',['$scope','editProfile', function ( $scope, editProfile ) {
    
    $scope.wishes = editProfile.getCurrentUser();
    
}]);