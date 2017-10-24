<<<<<<< HEAD
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
=======
angular.module('store', ['ngRoute', 'ngResource'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'views/welcome.html',
        controller: ''
    })
    .when('/apparel', {
        templateUrl: 'views/apparel.html',
        // controller: 'ApperlPostController'
    })
//     .when('/login', {
//         templateUrl: 'views/.html',
//         controller: 'LoginController'
//     })
//     .when('/users', {
//         templateUrl: 'views/.html',
//         controller: 'UserListController',
//         requiresLogin: true,
//         requiresAdmin: true
//     })
    .when('/cart', {
        templateUrl: 'views/cart.html',
    
    })
    .when('/about', {
        templateUrl: 'views/aboutus.html',
        // controller: 'UpdatePostController'
    })
    .when('/contact', {
        templateUrl: 'views/contactus.html',
        // controller: 'SinglePostController'
    })
//     .otherwise({
//         redirectTo: '/'
//     });
// }])
// .run(['$rootScope', '$location', 'UserService', function($rootScope, $location, UserService) {
//     $rootScope.$on('$routeChangeStart', function(event, nextRoute, previousRoute) {
//         if (nextRoute.$$route.requiresLogin && !UserService.isLoggedIn()) {
//             event.preventDefault();
//             UserService.loginRedirect();
//         } else if (nextRoute.$$route.requiresAdmin && !UserService.isAdmin()) {
//             event.preventDefault();
//             $location.replace().path('/');
//         }
    // });
>>>>>>> garcia
}]);