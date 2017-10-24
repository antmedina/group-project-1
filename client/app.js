angular.module('Store', ['ngRoute', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', { 
        templateUrl: 'views/welcome.html'
    })
    .when('/#!/merch', { //needs to match api route
        templateUrl: 'views/merch.html',
        controller: 'ProductsController' 
    })
    .when('/#!/cart', { //needs to match api route
        templateUrl: 'views/cart.html',
        controller: "PurchasesController" 
    })
    .when('/#!/products/:id', { //needs to match api route
        templateUrl: 'views/detail.html',
        controller: '' //products controller or create new "detail controller"
    })
    .otherwise({
        redirectTo: '/'
    });
}]);