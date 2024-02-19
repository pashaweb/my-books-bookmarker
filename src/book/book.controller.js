'use strict';

class Book {
  constructor($stateParams, $http, FavoritesService) {
    this.bookId = $stateParams.bookId;
    this._http = $http;
    this.FavoritesService = FavoritesService;
  }

  addBookToCollection() {
    this.FavoritesService.add(this.book);
    this.isFavorite = true;
  }

  removeBookFromCollection() {
    this.FavoritesService.remove(this.book);
    this.isFavorite = false;
  }

  $onInit() {
    this._http
      .get(`https://www.googleapis.com/books/v1/volumes/${this.bookId}`)
      .then((response) => {
        console.log("response", response);
        this.book = response.data;
      });
    this.isFavorite = this.FavoritesService.isFaoriteBook(this.bookId);
  }
}

Book.inject = ["$stateParams", "$http", "FavoritesService"];

angular.module("myApp").controller("BookController", Book);
