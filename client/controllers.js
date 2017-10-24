var myApp = angular.module('store.controllers', []);

myApp.controller('ProductsController', ['$scope', '$resources', '$location', '$routeParams', function($scope, $resource, $location, $routeParams){
	
	console.log('ProductsController loaded...');

	function getProducts() { //$scope.getProducts = function() 
		$resources.get('/api/products').then(function(response){
			$scope.Products = response.data;
		});
	}
	getProducts();



}]);


myApp.controller('PurchasesController', ['$scope', '$resources', '$location', '$routeParams', function($scope, $resources, $location, $routeParams){
	
	console.log('PurchasesController loaded...');

	function getPurchases() { //$scope.getPurchases = function() 
		$resources.get('/api/purchases').then(function(response){
			$scope.Purchases = response.data;
		});
	}
	getPurchases();



}]);