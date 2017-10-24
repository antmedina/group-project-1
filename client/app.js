angular.module('store', ['ngRoute', 'ngResource', 'store.controllers', 'store.factories', 'store.services', 'angularPayments'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', { 
        templateUrl: 'views/welcome.html'
    })
    .when('/products/merch', {
        templateUrl: 'views/merch.html',
        controller: 'ProductsController' 
    })
    .when('/products/apparel', { 
        templateUrl: 'views/apparel.html',
        controller: 'ProductsController' 
    })
    .when('/purchases', {
        templateUrl: 'views/cart.html',
        controller: "PurchasesController" 
    })
    .when('/products/:id', { 
        templateUrl: 'views/detail.html',
        controller: 'DetailController' 
    })
    .otherwise({
        redirectTo: '/'
    });
}]);