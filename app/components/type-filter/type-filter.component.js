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
    controller: ['$scope', class BreweryCardController {

        constructor($scope){
            'ngInject'
            this.$scope = $scope;
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
              'proprietor',
              'closed'  
            ];
        }

        onChange(){
            console.log('select type', this.breweryType);
        }
    }]
});