var myApp = angular.module('Store', []);

myApp.controller('ProductsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	
	console.log('ProductsController loaded...');

	function getProducts() { //$scope.getProducts = function() 
		$http.get('/api/Products').then(function(response){
			$scope.Products = response.data;
		});
	}
	getProducts();



}]);


myApp.controller('PurchasesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	
	console.log('PurchasesController loaded...');

	function getPurchases() { //$scope.getPurchases = function() 
		$http.get('/api/Purchases').then(function(response){
			$scope.Purchases = response.data;
		});
	}
	getPurchases();



}]);