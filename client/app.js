angular.module('store', ['ngRoute', 'ngResource', 'store.controllers', 'store.factories', 'store.services'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', { 
        templateUrl: 'views/welcome.html'
    })
    .when('/products/merch', { //needs to match api route
        templateUrl: 'views/merch.html',
        controller: 'ProductsController' 
    })
    .when('/products/apparel', { //needs to match api route
        templateUrl: 'views/apparel.html',
        controller: 'ProductsController' 
    })
    .when('/purchases', { //needs to match api route
        templateUrl: 'views/cart.html',
        controller: "PurchasesController" 
    })
    .when('/products/:id', { //needs to match api route
        templateUrl: 'views/detail.html',
        controller: 'DetailController' 
    })
    .otherwise({
        redirectTo: '/'
    });
}]);