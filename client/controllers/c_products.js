var myApp = angular.module('myApp');

myApp.controller('ProductsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	
	console.log('ProductsController loaded...');

	function getProducts() { //$scope.getProducts = function() 
		$http.get('/api/Products').then(function(response){
			$scope.Products = response.data;
		});
	}
	getProducts();



}]);