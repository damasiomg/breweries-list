angular
.module('breweriesList')
.controller('DetailsController', ['$routeParams', class DetailsController {

    constructor($routeParams){
        'ngInject',
        this.$routeParams = $routeParams;
    }

    $onInit(){}
}]);
