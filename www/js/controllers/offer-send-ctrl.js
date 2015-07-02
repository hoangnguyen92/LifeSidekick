lifeSidekickApp
    .controller('OfferSendCtrl', function ($scope, $rootScope, $state, $stateParams, loading, Invite, dataService) {
        $scope.users = [];
        $scope.invite = {};

        $scope.sendOffer = function (user) {
            dataService.findOfferById($stateParams.offerId)
                .then(function (offer) {
                    var invite = new Invite();
                        invite.setInvitedUser(user);
                        invite.setOffer(offer);
                        invite.save()
                            .then(function (invite) {
                                $state.go('app.profile.about.my-offers');
                            }, function (error) {
                                console.log(error);
                            });
                }, function (error) {
                    console.log(error);
                });
        };

        fetchList();

        function fetchList() {
            loading.show();

            dataService.findAllUsers()
                .then(function (users) {
                    loading.hide();
                    $scope.users = users;

                }, function (error) {
                    loading.hide();
                    console.log(error);
                })
        }
    });