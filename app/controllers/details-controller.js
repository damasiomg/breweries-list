angular
.module('breweriesList')
.controller('DetailsController', ['$routeParams', 'BrewerieaListService', class DetailsController {

    constructor($routeParams, BrewerieaListService){
        'ngInject',
        this.$routeParams = $routeParams;
        this.BrewerieaListService = BrewerieaListService;
    }

    $onInit(){
        this.isLoading = true;
        this.BrewerieaListService._getBreweriesById(this.$routeParams.id)
            .then(data => {
                this.brewery = data;
                this.isLoading = false;
            });
    }

    onClick(){
        window.location.href = '/';
    }

}]);
