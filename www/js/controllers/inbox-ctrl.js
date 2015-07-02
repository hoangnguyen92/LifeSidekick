"use strict";

lifeSidekickApp
    .controller('InboxCtrl', function($rootScope, $scope, $state, dataService, loading) {
        $scope.invites = [];
        $scope.offers = [];

        $scope.acceptOffer = function (invite, index) {
            var offer = invite.get("offer");
            offer.set("acceptedUser", ($rootScope.currentUser));
            offer.set("status", ("pending"));
            offer.save()
                .then(function (offer) {
                    dataService.findInvitesByOffer(offer)
                        .then(function (invites) {
                            invites.forEach(function (invite) {                                                                                                                                                                                                                                                                               
                                invite.destroy();
                            });
                        });

                    $scope.$emit('onWorkingOffers:listUpdated');

                    $scope.invites.splice(index, 1);
                    $state.go($state.current, {}, {reload: true});
                }, function (error) {
                    console.log(error);
                });
        };

        $scope.decline = function (index) {
            $scope.invites[index].destroy();
            $scope.invites.splice(index, 1);
            $state.go($state.current, {}, {reload: true});
        };

        fetchList();

        function fetchList() {
            loading.show();

            dataService.findInvitesByInvitedUser($rootScope.currentUser)
                .then(function (invites) {
                    loading.hide();
                    $scope.invites = invites;
                }, function (error) {
                    loading.hide();
                    console.log(error);
                });
        }
    });