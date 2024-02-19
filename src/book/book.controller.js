'use strict';

angular.module("myApp").controller("BookController",['$stateParams', '$http', function($stateParams, $http) {

  this.bookId = $stateParams.bookId;
  this._http = $http;

  this.$onInit = function() {
    this._http
      .get(`https://www.googleapis.com/books/v1/volumes/${this.bookId}`)
      .then((response) => {
        console.log("response", response);
        this.book = response.data;
      });
  }
}]);
