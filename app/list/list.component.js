angular.module("swagShop").component("list", {
  templateUrl: "app/list/list.template.html",
  controllerAs: "listCtrl",
  controller: function(swagSrvc, $state, cartSrvc) {
    this.newChoice = "";
    if ($state.params.choice.currentChoice.title) {
      this.newChoice = $state.params.choice.currentChoice.title;
    }
    this.cart = cartSrvc.cart;
    this.swag = swagSrvc.swag;
    this.goToDetails = function(id) {
      $state.go("details", { id: id });
    };

    this.alertCart = function(item) {
      let count = 0;
      if (count < 1) {
        cartSrvc.alertCartItems(item);
      }
      count++;
    };
  }
});
