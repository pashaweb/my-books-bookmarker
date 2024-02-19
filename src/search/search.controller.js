'use strict';

angular
  .module("myApp")
  .controller("SearchController",['$stateParams', '$http', '$state', function($stateParams, $http, $state) {
    this.query = $stateParams.query || "";
    this.page = $stateParams.page || 0;
    this.maxResults = 40;

    this.startIndex = (this.page ) * this.maxResults;
    this._http = $http;
    this._state = $state;
    this.searchResults = {};
    this.totalItems = 0;
    this.itemsPerPage = this.maxResults = 10;
    this.currentPage = Number(this.page) + 1;

    this.searchForQuery = function () {
      console.log("SearchController.searchForQuery");
      console.log("query", this.query); 
      this._state.go("searchq", { query: this.query, page: 0 });
    };

    this.serchPage = function (page) {
      this._state.go("searchq", { query: this.query, page: page });
    };

    this.pageChanged = function ($event){
      console.log("pageChanged sdad", $event);
      this._state.go("searchq", { query: this.query, page: $event.page - 1 });
    };

    this.$onInit = function () {
      if (this.query !== "") {
        console.log("SearchController.$onInit");

        this._http
          .get(`https://www.googleapis.com/books/v1/volumes?q=${this.query}&startIndex=${this.startIndex}&maxResults=${this.maxResults}`)
          .then((response) => {
            console.log("response", response);
            this.searchResults = response.data;
            this.books=this.searchResults.items;
            this.totalItems = this.searchResults.totalItems;
          });
      }
    };
  } ]);