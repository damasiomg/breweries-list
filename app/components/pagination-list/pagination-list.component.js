angular
.module('breweriesList')
.component('paginationList', {
    bindings: {
       page: '=', 
    },
    controllerAs: 'vm',
    template: `
        <div class="pagination-list">
            <div 
                ng-repeat="item in vm.pages" 
                class="pagination-list__item"
                ng-class="{'pagination-list__item--active': item === vm.page}"
                ng-click="vm.onClick(item)"
            >
                {{item}}
            </div>
        </div>
    `,
    controller: ['$scope', class PaginationListController {

        constructor($scope){
            'ngInject'
            this.$scope = $scope;
        }

        $onInit(){
            this.pages = [1, 2, 3];
        }

        onClick(value){
            this.page = value;
        }

    }]
});