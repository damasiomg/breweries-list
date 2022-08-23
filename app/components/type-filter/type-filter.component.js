angular
.module('breweriesList')
.component('typeFilter', {
    bindings: {
       breweryType: '<', 
    },
    controllerAs: 'vm',
    template: `
        <div class="type-filter">
            <label for="typeFilter">Filter:</label>
            <select name="typeFilter" ng-model="vm.breweryType" ng-change="vm.onChange();">
                <option value="">All</option>
                <option ng-repeat="type in vm.types" value="{{type}}">{{type}}</option>
            </select>
        </div>
    `,
    controller: ['$rootScope', class BreweryCardController {

        constructor($rootScope){
            'ngInject'
            this.$rootScope = $rootScope;
        }

        $onInit(){
            this.types = [
              'micro',
              'nano',
              'regional',
              'brewpub',
              'large',
              'planning',
              'bar',
              'contract',
              'closed'  
            ];
        }

        onChange(){
            this.$rootScope.$broadcast('update-brewery-list', { type: this.breweryType });
        }
    }]
});