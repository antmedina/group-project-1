angular.module('store.controllers', [])
.controller('ProductsController', ['$scope', 'Product', function($scope, Product) {
    $scope.products = Product.query(); //Check to see how the products table categorizes Merch & Apparel then use to query
}])
.controller('SingleProductController', ['$scope', '$routeParams', '$location', 'Product', function($scope, $routeParams, $location, Product) {
    $scope.product = Product.get({ id: $routeParams.id });

    $scope.cart = function() { //I think we should use a detail html
        $location.path('/' + $routeParams.id + '/add_to_cart');
    }
//CART CONTROLLER SCOPE BELOW NEEDS TO BE SEPARATED
    $scope.remove = function() {
        if (confirm('Are you sure you want to remove this item from the cart?')) {
            $scope.product.$delete(function() {
                $location.replace().path('/');
            });
        }
    }
}])
.controller('CartController', ['$scope', '$routeParams', '$location', 'Purchase', function($scope, $routeParams, $location, Purchase) {
//Cart controller empty
}])
.controller('CheckoutController', ['$scope', '$location', 'Purchase', function($scope, $location, Purchase) {
    var elements = stripe.elements();
    var card = elements.create('card');
    card.mount('#card-field');

    $scope.errorMessage = '';

    $scope.processPurchase = function() {
        stripe.createToken(card, {
            name: $scope.name,
            address_line1: $scope.line1,
            address_city: $scope.city,
            address_state: $scope.state
        }).then(function(result) {
            if (result.error) {
                $scope.errorMessage = result.error.message;
            } else {
                var d = new Purchase({
                    token: result.token.id,
                    amount: $scope.amount
                });
                d.$save(function() {
                    alert('Thank you for your purchase');
                    $location.path('/');
                }, function(err) {
                });
            }
        });
    }
}]);
