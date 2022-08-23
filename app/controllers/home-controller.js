angular
.module('breweriesList')
.controller('HomeController', ['$routeParams','$scope', '$rootScope', 'BrewerieaListService' , class HomeController {

    constructor($routeParams, $scope, $rootScope, BrewerieaListService){
        'ngInject',
        this.$routeParams = $routeParams;
        this.$scope = $scope;
        this.$rootScope = $rootScope;
        this.BrewerieaListService = BrewerieaListService;
    }

    $onInit(){
        this.page = 1;
        this.breweryType = '';
        this.isLoading = true;
        this.BrewerieaListService._getBreweriesByType({ page: this.page })
            .then(data => {
                this.breweryList = data;
                this.isLoading = false;
            });

        this.$rootScope.$on('update-brewery-list', (e, data) => {
            
            if(this.breweryType !== data.type){
                this.page = 1;
            }
            
            let params = {page: data.page || this.page };
            this.breweryType = data.type;


            if(!!this.breweryType){
                params.by_type = data.type;
            }
            this.updateBreweryList(params);
        });
    }

    updateBreweryList(params){
        this.isLoading = true;
        this.BrewerieaListService._getBreweriesByType(params)
            .then(data => {
                this.breweryList = data;
                this.isLoading = false;
            });
    }

}]);
