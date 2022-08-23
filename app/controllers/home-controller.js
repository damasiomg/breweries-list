angular
.module('breweriesList')
.controller('HomeController', ['$routeParams','$scope', '$rootScope', class HomeController {

    constructor($routeParams, $scope, $rootScope){
        'ngInject',
        this.$routeParams = $routeParams;
        this.$scope = $scope;
        this.$rootScope = $rootScope;
    }

    $onInit(){

        this.brewery = {
            "id": "13-below-brewery-cincinnati",
            "name": "13 Below Brewery",
            "brewery_type": "micro",
            "street": "7391 Forbes Rd",
            "city": "Cincinnati",
            "state": "Ohio",
            "county_province": null,
            "postal_code": "45233-1013",
            "country": "United States",
            "longitude": "-84.70634815",
            "latitude": "39.12639764",
            "phone": "5139750613",
            "website_url": "http://www.13belowbrewery.com",
            "updated_at": "2022-08-20T02:56:08.975Z",
            "created_at": "2022-08-20T02:56:08.975Z"
        }

    }

}]);
