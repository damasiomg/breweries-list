angular
.module('breweriesList')
.component('breweryCard', {
    bindings: {
       brewery: '<', 
    },
    controllerAs: 'vm',
    template: `
        <div class="brewery-card">
            Card
        </div>
    `,
    controller: ['$scope', class BreweryCardController {

        constructor($scope){
            'ngInject'
            this.$scope = $scope;
        }
    }]
});