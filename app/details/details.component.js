angular.module("swagShop").component("detailsComponent", {
  templateUrl: "app/details/details.template.html",
  controllerAs: "detailsCtrl",
  controller: function(swagSrvc, cartSrvc, $stateParams, $state) {
    console.log($state);
    this.swag = swagSrvc.swag;
    if ($stateParams.id) {
      let itemIndex = this.swag.findIndex(item => item.id === $stateParams.id);
      this.item = this.swag[itemIndex];
    }
    this.addToCart = function(item) {
      cartSrvc.add(item);
      $state.go("list", { choice: { currentChoice: this.item } });
      console.log($state);
    };
  }
});
