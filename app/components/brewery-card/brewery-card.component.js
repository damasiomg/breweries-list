angular
.module('breweriesList')
.component('breweryCard', {
    bindings: {
       brewery: '<', 
    },
    controllerAs: 'vm',
    template: `
        <div class="brewery-card" ng-click="vm.onClick(vm.brewery.id);">
            <div class="brewery-card__inner">
                <p class="brewery-card__title">{{vm.brewery.name}}</p>
                <label>{{vm.brewery.street}}</label>
                <label>{{vm.brewery.city}} {{vm.brewery.city}} - {{vm.brewery.postal_code}}</label>
                <label>{{vm.brewery.country}}</label>
            </div>

            <div class="brewery-card__footer">
                <label class="brewery-card__type theme-{{vm.brewery.brewery_type}}">
                    {{vm.brewery.brewery_type}}
                </label>
            </div>

        </div>
    `,
    controller: class BreweryCardController {
        onClick(id){  
            window.location.href=`/#!/brewery-details/${id}`;
        }
    }
});