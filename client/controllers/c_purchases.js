var myApp = angular.module('myApp');

myApp.controller('PurchasesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	
	console.log('PurchasesController loaded...');

	function getPurchases() { //$scope.getPurchases = function() 
		$http.get('/api/Purchases').then(function(response){
			$scope.Purchases = response.data;
		});
	}
	getPurchases();



}]);