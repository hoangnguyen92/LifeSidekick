"use strict";

var lifeSidekickApp = angular.module('starter', ['ionic', 'ionic.rating', 'ionic.contrib.ui.cards', 'angular-cache'])

    .run(function ($ionicPlatform, CacheFactory, config) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });

        Parse.initialize(config.APP_ID, config.JAVASCRIPT_ID);
    })

    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        // set tabs position for all devices because there are different default behaviours
        $ionicConfigProvider.tabs.position('bottom');

        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'AppCtrl'
            })
            .state('app.home', {
                url: "/home",
                abstract: true,
                views: {
                    'menuContent': {
                        templateUrl: "templates/home/home.html"
                    }
                }
            })
            .state('app.home.wishes-feed', {
                url: "/wishes-feed",
                views: {
                    'wishes-feed': {
                        templateUrl: "templates/home/wishes-feed.html",
                        controller: 'WishesFeedCtrl'
                    }
                }
            })
            .state('app.home.offers-feed', {
                url: "/offers-feed",
                views: {
                    'offers-feed': {
                        templateUrl: "templates/home/offers-feed.html",
                        controller: 'OffersFeedCtrl'
                    }
                }
            })
            .state('app.wish-detail', {
                url: "/wish-detail/:wishId/:statePath",
                views: {
                    'menuContent': {
                        templateUrl: "templates/home/wish-detail.html",
                        controller: 'WishDetailCtrl'
                    }
                }
            })
            .state('app.profile', {
                url: "/profile",
                abstract: true,
                views: {
                    'menuContent': {
                        templateUrl: "templates/profile/profile.html"
                    }
                }
            })
            .state('app.profile.about', {
                url: "/about",
                views: {
                    'about': {
                        templateUrl: "templates/profile/about.html",
                        controller: 'AboutCtrl'
                    }
                }
            })
            .state('app.profile.about.my-wishes', {
                url: "/my-wishes",
                views: {
                    'mainContent': {
                        templateUrl: "templates/profile/my-wishes.html",
                        controller: 'MyWishesCtrl'
                    }
                }
            })
            .state('app.profile.about.my-offers', {
                url: "/my-offers",
                views: {
                    'mainContent': {
                        templateUrl: "templates/profile/my-offers.html",
                        controller: 'MyOffersCtrl'
                    }
                }
            })
            .state('app.offer-send', {
                url: "/offer-send/:offerId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/offer-send.html",
                        controller: 'OfferSendCtrl'
                    }
                }
            })
            .state('app.new-wish', {
                url: "/new-wish",
                views: {
                    'menuContent': {
                        templateUrl: "templates/profile/new-wish.html",
                        controller: 'NewWishCtrl'
                    }
                }
            })
            .state('app.new-offer', {
                url: "/new-offer",
                views: {
                    'menuContent': {
                        templateUrl: "templates/profile/new-offer.html",
                        controller: 'NewOfferCtrl'
                    }
                }
            })
            .state('app.edit-profile', {
                url: "/edit-profile",
                views: {
                    'menuContent': {
                        templateUrl: "templates/profile/edit-profile.html",
                        controller: 'EditProfileCtrl'
                    }
                }
            })
            .state('app.profile.history', {
                url: "/history",
                views: {
                    'history': {
                        templateUrl: "templates/profile/history.html",
                        controller: 'HistoryCtrl'
                    }
                }
            })
            .state('app.on-working-offers', {
                url: "/on-working-offers",
                views: {
                    'menuContent': {
                        templateUrl: "templates/offers/on-working-offers.html",
                        controller: 'OnWorkingOffersCtrl'
                    }
                }
            })
            .state('app.inbox', {
                url: "/inbox",
                views: {
                    'menuContent': {
                        templateUrl: "templates/inbox.html",
                        controller: 'InboxCtrl'
                    }
                }
            })
            .state('app.pay', {
                url: "/pay/:offerId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/pay.html",
                        controller: 'PayCtrl'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home/wishes-feed');
    });
