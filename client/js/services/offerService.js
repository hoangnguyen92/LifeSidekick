'use strict';
app.factory('offerService', function($http, $location) {
    var offers = [{
        _id: "1",
        owner: {
            name: "Hoang Nguyen",
            avatar: ""
        },
        price:"99",
        createdDate: "2015-06-26T09:00:00",
        endDate: "2015-07-07T00:00:00",
        productName: "Iphone 6",
        progress: "45",
        productDescription: "iPhone 6 isn't simply bigger — it's better in every way. Larger, yet dramatically thinner. More powerful, but remarkably power efficient.",
        images: [{
            url: "http://placehold.it/1900x1080&text=Specialists"
        }, {
            url: "http://placehold.it/1900x1080&text=Wordlwide"
        }, {
            url: "http://placehold.it/1900x1080&text=Since 1910"
        }]

    }]
    return {
        newOffers: function() {
            return offers;
        }
    }
});