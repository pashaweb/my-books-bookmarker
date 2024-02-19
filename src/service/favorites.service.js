'use strict';

angular.module("myApp").service("FavoritesService", [
  "$localStorage",
  function ($localStorage) {
    this.favorites = [];

    this.add = function (book) {
      let storedlist = $localStorage.$default({ favorites: [] }).favorites;
      if (storedlist.some((item) => item.id === book.id)) {
        return;
      }
      $localStorage.favorites = [...storedlist, book];
    };

    this.remove = function (book) {
      console.log("FavoritesService.remove", book);
      $localStorage.favorites = $localStorage.favorites.filter(
        (item) => item.id !== book.id
      );
    };

    this.isFaoriteBook = function (bookId) {
      if (!$localStorage.favorites) {
        return false;
      };
      return $localStorage.favorites.some((book) => book.id === bookId);
    }

    this.getFavorites = function () {
      return $localStorage.$default({ favorites: [] }).favorites;
    };
  },
]);
