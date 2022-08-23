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

    }

}]);
