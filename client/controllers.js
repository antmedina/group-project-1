angular.module('store.controllers', [])

    .controller('MerchController', ['$scope', 'Merch', 'SEOService', '$location', function ($scope, Merch, SEOService, $location) {

        $scope.merch = Merch.query();

        SEOService.setSEO({
            title: 'Merch',
            image: 'http://' + $location.host() + '/client/images/covalence-store-misc-15.png',
            url: $location.url(),
            description: 'Merchandise for every occasion'
        })


    }])

    .controller('ApparelController', ['$scope', 'Apparel', 'SEOService', '$location', function ($scope, Apparel, SEOService, $location) {

        $scope.apparel = Apparel.query();
        SEOService.setSEO({
            title: 'Apparel',
            image: 'http://' + $location.host() + '/client/images/covalence-store-misc-15.png',
            url: $location.url(),
            description: 'Apparel for every occasion'
        })


        
    }])

    .controller('DetailController', ['$scope', '$routeParams', '$location', 'Product', 'CheckoutService', 'SEOService', function ($scope, $routeParams, $location, Product, CheckoutService, SEOService) {
        $scope.product = Product.get({ id: $routeParams.id });  

        $scope.addToCart = function (id, imageurl, title, price) {
            var payload = {
                id: $scope.product.id,
                imageurl: $scope.product.imageurl,
                title: $scope.product.title,
                price: $scope.product.price

            }
            CheckoutService.checkoutItems.push(payload);
            alert('Item has been added to your cart!');
            if($scope.product.categoryid===1){
                $location.path('/products/merch');
            }else {
                $location.path('products/apparel');
            }
        }

        $scope.cart = function () {
            $location.path('/' + $routeParams.id + '/checkout');
        }

        SEOService.setSEO({
            title: 'Product',
            image: 'http://' + $location.host() + '/client/images/covalence-store-misc-15.png',
            url: $location.url(),
            description: 'Take a closer look'
        })

    }])


    .controller('CheckoutController', ['$scope', '$location', 'Product', 'Purchases', 'CheckoutService', '$routeParams', 'SEOService', function ($scope, $location, Product, Purchases, CheckoutService, $routeParams, SEOService) {
        $scope.cart = CheckoutService.checkoutItems;
       
        // get total function for checkout cart
        $scope.getTotal = function () {
            var total = 0
            for (var i = 0; i <$scope.cart.length; i++){
                var prod = $scope.cart[i];
                total += (prod.price);
            }
            return total;
        }

        var elements = stripe.elements();
        var card = elements.create('card');
        card.mount('#card-field');

        $scope.errorMessage = '';


        $scope.stripeCharge = function() {
            stripe.createToken(card, {
                name: $scope.name
            }).then(function(result) {
                if (result.error) {
                    $scope.errorMessage = result.error.message;
                } else {
                    // result.token is the card token (need id property)
                    var cart = CheckoutService.checkoutItems;
                    var c = new Purchases({
                        token: result.token.id,
                        amount: $scope.getTotal(),
                        cart: cart,
                        email: $scope.email
                    })
                    
                    c.$save(function(succes) {
                        alert('Thank you for the payment, an email has been sent.');
                        $location.path('/contact');
                    }, function(err) {
                        console.log(err);
                    })
                }
            });
        }
        // end total function
        
        $scope.remove = function () {
            var i = CheckoutService.checkoutItems.indexOf($scope.cart.item);
            if (confirm('Are you sure you want to remove this item from the cart?')) {
                CheckoutService.checkoutItems.splice(i, 1);
            }
        }

        SEOService.setSEO({
            title: 'Checkout',
            image: 'http://' + $location.host() + '/client/images/covalence-store-misc-15.png',
            url: $location.url(),
            description: 'Are you ready to checkout?'
        })


    }]);
