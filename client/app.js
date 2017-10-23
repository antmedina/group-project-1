angular.module('storefront', ['ngRoute', 'ngResource', '', ''])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/welcome.html'
    })
    .when('/', {
        templateUrl: 'views/',
        controller: ''
    })
    .when('//:/', {
        templateUrl: 'views/',
        controller: ''
    })-
    .when('//:', {
        templateUrl: 'views/s',
        controller: ''
    })
    .otherwise({
        redirectTo: '/'
    });
}]);