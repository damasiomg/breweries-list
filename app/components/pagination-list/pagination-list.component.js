angular
.module('breweriesList')
.component('paginationList', {
    bindings: {
       page: '=',
       type: '<',
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
    controller: ['$rootScope', class PaginationListController {

        constructor($rootScope){
            'ngInject'
            this.$rootScope = $rootScope;
        }

        $onInit(){
            this.pages = [1, 2, 3];
        }

        onClick(value){
            this.page = value;
            this.$rootScope.$broadcast('update-brewery-list', { page: value, type: this.type });

        }

    }]
});