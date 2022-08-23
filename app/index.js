angular.module('breweriesList', [
  'ngRoute'
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
