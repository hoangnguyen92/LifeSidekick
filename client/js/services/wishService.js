'use strict';
app.factory('wishService', function($http, $location) {
    var wishes = [{
        _id: "1",
        owner: {
            name: "Hoang Nguyen",
            avatar: ""
        },
        createdDate: "12/06/2015",
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
        newWishes: function() {
            return wishes;
        }
    }
});