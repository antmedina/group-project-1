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
//     .when('/:id/update', {
//         templateUrl: 'views/update.html',
//         controller: 'UpdatePostController'
//     })
//     .when('/:id', {
//         templateUrl: 'views/single.html',
//         controller: 'SinglePostController'
//     })
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
}]);