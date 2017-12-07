angular
  .module("swagShop", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state({
        name: "list",
        url: "/",
        component: "list",
        params: {
          choice: {
            currentChoice: "hello"
          }
        }
      })
      .state({
        name: "details",
        url: "/details/:id",
        component: "detailsComponent",
        params: {
          choice: {
            currentChoice: "goodbye"
          }
        }
      })
      .state({
        name: "cart",
        url: "/cart",
        component: "cart"
      });

    $urlRouterProvider.otherwise("/");
  });
