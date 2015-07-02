"use strict";

lifeSidekickApp
    .controller('NewWishCtrl', function ($rootScope, $scope, $state, Wish) {
        $scope.newOfferData = {};

        $scope.createNewWish = function (newWishData) {
            var wish = new Wish();
            wish.setName(newWishData.name);
            wish.setDescription(newWishData.description);
            wish.setPrice(newWishData.price);
            wish.setOwner($rootScope.currentUser);
            wish.setReachedMoney(0);

            wish.save()
                .then(function (wish) {
                    $rootScope.currentUser.getWishes().push(wish);
                    $rootScope.currentUser.setWishes($rootScope.currentUser.getWishes());
                    $rootScope.currentUser.save()
                        .then(function (user) {
                            $scope.$emit('myWishes:listChanged');
                            $scope.$emit('wishesFeed:listChanged');
                            $state.go("app.profile.about.my-wishes");
                        }, function (error) {
                            console.log(error);
                        });
                }, function (error) {
                    console.log(error);
                });
        }
    });