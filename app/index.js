angular.module('breweriesList', [
  'ngRoute',
  'ngAria'
])
.config(['$routeProvider', 
  function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
    })
    .when('/brewery-details/:id', {
      templateUrl: 'views/brewery-details.html',
    });
  }
])
.config(['$ariaProvider',
  function($ariaProvider) {
    $ariaProvider.config({
      ariaHidden: false,
      ariaChecked: true,
      ariaDisabled: true,
      ariaRequired: true,
      ariaInvalid: true,
      ariaMultiline: true,
      ariaValue: true,
      tabindex: true
    })
  }
]);
