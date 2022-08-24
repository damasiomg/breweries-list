angular
.module('breweriesList')
.service('BrewerieaListService', ['$http', '$q', class BreweriesListService {
    constructor($http, $q){
        'ngInject';
        this.$http = $http;
        this.$q = $q;
        this.EXTERNAL_LINK_API = 'https://api.openbrewerydb.org/breweries';
    }

    _getBreweriesByType(params){
        return this.$q((resolve, reject) => {
            this.$http({
                method: 'GET', 
                params, 
                url: this.EXTERNAL_LINK_API
            }).then((response) => {
                if(response && response.data){
                    resolve(response.data);
                }else{
                    reject(null);
                }
            });
        });
    }
    _getBreweriesById(id){
        return this.$q((resolve, reject) => {
            this.$http({
                method: 'GET',  
                url: `${this.EXTERNAL_LINK_API}/${id}`
            }).then((response) => {
                if(response && response.data){
                    resolve(response.data);
                }else{
                    reject(null);
                }
            });
        });
    }
}]);