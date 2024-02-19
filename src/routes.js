import "./book/book.controller.js";
import "./favorites/favorites.controller.js";
import "./login/log-in.controller.js";
import "./search/search.controller.js";

import bookTemplate from "./book/book.view.html?raw";
import favoritesTemplate from "./favorites/favorites.view.html?raw";
import logInTemplate from "./login/log-in.html?raw";
import searchTemplate from "./search/search.view.html?raw";

angular
  .module("myApp")
  .config([
    "$stateProvider",
    config,
  ])
function config($stateProvider) {
  $stateProvider
    .state("home", {
      url: "",
      template: logInTemplate,
      controller: "LogInController",
      controllerAs: "$ctrl",
    })
    .state("search", {
      url: "/search",
      template: searchTemplate,
      controller: "SearchController",
      controllerAs: "$ctrl",
    })
    .state("searchq", {
      url: "/search/:query/:page",
      template: searchTemplate,
      controller: "SearchController",
      controllerAs: "$ctrl",
    })
    .state("book", {
      url: "/book/:bookId",
      template: bookTemplate,
      controller: "BookController",
      controllerAs: "$ctrl",
    }).
    state("favorites", {
      url: "/favorites",
      template: favoritesTemplate,
      controller: "FavoritesController",
      controllerAs: "$ctrl",
    })
}
