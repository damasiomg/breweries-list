angular
.module('breweriesList')
.controller('DetailsController', ['$routeParams', 'BrewerieaListService', class DetailsController {

    constructor($routeParams, BrewerieaListService){
        'ngInject',
        this.$routeParams = $routeParams;
        this.BrewerieaListService = BrewerieaListService;
    }

    $onInit(){
        this.BrewerieaListService._getBreweriesById(this.$routeParams.id)
            .then(data => {
                this.brewery = data;
            });
    }

    onClick(){
        window.location.href = '/';
    }

}]);
