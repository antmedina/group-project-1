angular.module('store.controllers', [])

    .controller('MerchController', ['$scope', 'Merch', function ($scope, Merch) {

        $scope.merch = Merch.query();

        $scope.addToCart = function (id, imageurl, title, price) {
            var payload = {
                id: id,
                imageurl: imagery,
                title: title,
                price: price
            }
            checkoutService.checkoutItems.push(payload);
            console.log(checkoutService.checkoutItems);
        }
    }])

    .controller('ApparelController', ['$scope', 'Apparel', function ($scope, Apparel) {

        $scope.apparel = Apparel.query();

        $scope.addToCart = function (id, imageurl, title, price) {
            var payload = {
                id: id,
                imageurl: imageurl,
                title: title,
                price: price
            }
            checkoutService.checkoutItems.push(payload);
            console.log(checkoutService.checkoutItems);
        }
    }])

    .controller('DetailController', ['$scope', '$routeParams', '$location', 'Product', 'CheckoutService', function ($scope, $routeParams, $location, Product, CheckoutService) {
        $scope.product = Product.get({ id: $routeParams.id });  

        $scope.addToCart = function (id, imageurl, title, price) {
            var payload = {
                id: $scope.product.id,
                imageurl: $scope.product.imageurl,
                title: $scope.product.title,
                price: $scope.product.price
            }
            CheckoutService.checkoutItems.push(payload);
            console.log(CheckoutService.checkoutItems);
            window.history.back();
        }

        // $scope.cart = function () {
        //     $location.path('/' + $routeParams.id + '/checkout');
        // }
    }])


    .controller('CheckoutController', ['$scope', '$location', 'Product', 'Purchases', 'CheckoutService', '$routeParams', function ($scope, $location, Product, Purchases, CheckoutService, $routeParams) {
        $scope.cart = CheckoutService.checkoutItems;
        console.log(CheckoutService.checkoutItems);

        
        
        $scope.remove = function () {

            if (confirm('Are you sure you want to remove this item from the cart?')) {
                $scope.product.$delete(function () {
                    // $location.replace().path('/');
                });
            }
        }


        // var elements = stripe.elements();
        // var card = elements.create('card');
        // card.mount('#card-field');

        // $scope.errorMessage = '';

        // $scope.processPurchase = function () {
        //     stripe.createToken(card, {
        //         name: $scope.name,
        //         address_line1: $scope.line1,
        //         address_city: $scope.city,
        //         address_state: $scope.state
        //     }).then(function (result) {
        //         if (result.error) {
        //             $scope.errorMessage = result.error.message;
        //         } else {
        //             var d = new Purchase({
        //                 token: result.token.id,
        //                 amount: $scope.amount
        //             });
        //             d.$save(function () {
        //                 alert('Thank you for your purchase');
        //                 $location.path('/');
        //             }, function (err) {
        //             });
        //         }
        //     });
        // }
    }]);
