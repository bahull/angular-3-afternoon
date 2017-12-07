angular.module("swagShop").service("cartSrvc", function() {
  let cart = [];

  this.add = function(item) {
    cart.push(item);
    return cart;
  };

  this.remove = function(index) {
    cart.splice(index, 1);
    return cart;
  };

  this.checkout = function() {
    console.log("hit sefer");
    cart = [];
    return cart;
  };

  this.currentCart = function() {
    return cart;
  };
  this.alertCartItems = function(item) {
    alert(`You\`ve added a ${item} to your cart!`);
    console.log("hit cartAlert");
  };
});
