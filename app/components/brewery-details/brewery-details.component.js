angular
.module('breweriesList')
.component('breweryDetails', {
    bindings: {
       brewery: '<', 
    },
    controllerAs: 'vm',
    template: `
        <div class="brewery-details">
            <p class="brewery-details__title">{{vm.brewery.name}}</p>
            <span>Type: {{vm.brewery.brewery_type}}</span>
            <span>Street: {{vm.brewery.street}}</span>
            <span>City: {{vm.brewery.city}}</span>
            <span>State: {{vm.brewery.state}}</span>
            <span>Postal code: {{vm.brewery.postal_code}}</span>
            <span>Country: {{vm.brewery.country}}</span>
            <span ng-if="vm.brewery.website_url">Website: <a ng-href="{{vm.brewery.website_url}}" target="_blank">{{vm.brewery.website_url}}</a></span>
            <span ng-if="vm.brewery.phone">Phone: {{vm.brewery.phone}}</span>
            <span ng-if="vm.brewery.latitude">Open in maps: <a ng-href="http://maps.google.com/maps?q={{vm.brewery.latitude}},{{vm.brewery.longitude}}" target="_blank">{{vm.brewery.latitude}},{{vm.brewery.longitude}}</a></span>
        </div>
    `,
    controller: class BreweryDetailsController {}
});