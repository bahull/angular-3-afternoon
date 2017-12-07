angular.module("swagShop").component("cart", {
  templateUrl: "app/cart/cart.template.html",
  controllerAs: "cartCtrl",
  controller: function(cartSrvc) {
    this.cart = cartSrvc.currentCart();
    console.log("this.cart: ", this.cart);
    this.total = function() {
      console.log("Hit total function");
      let newTotal = this.cart.reduce(
        (total, current) => total + current.price,
        0
      );
      return newTotal;
    };
    this.checkout = function() {
      this.cart = cartSrvc.checkout();
    };
    this.removeItem = function(index) {
      cartSrvc.remove(index);
    };
  }
});
