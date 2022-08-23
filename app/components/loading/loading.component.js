angular
.module('breweriesList')
.component('loading', {
    bindings: {},
    controllerAs: 'vm',
    template: `
        <div class="loading">
            <img width="40" src="/assets/preloader.svg" alt="Loading..."/>
        </div>
    `,
    controller: ['$scope', class LoadingController {

        constructor($scope){
            'ngInject'
            this.$scope = $scope;
        }
    }]
});