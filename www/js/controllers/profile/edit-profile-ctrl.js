"use strict";

lifeSidekickApp
    .controller('EditProfileCtrl', function($rootScope, $scope, $state, popup) {

        $scope.user = $rootScope.currentUser;

        $scope.doSave = function (userData) {
            if (userData.fullname && userData.fullname != "") {
                $scope.user.setFullName(userData.fullname);
            }

            if (userData.email && userData.email != "") {
                $scope.user.setEmail(userData.email);
            }

            if (userData.fullname && userData.fullname != "") {
                $scope.user.setFullName(userData.fullname);
            }

            if (userData.skills) {
                $scope.user.setSkills(userData.skills);
            }

            $scope.user.save()
                .then(function (user) {
                    $state.go("app.profile.about.my-wishes");
                }, function (error) {

                });
        }
    });