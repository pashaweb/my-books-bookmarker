import bookTempleate from "./book-card.html?raw";
angular.module("myApp").component("bookCard", {
  bindings: {
    book: "<"
  },
  template: bookTempleate,
});
