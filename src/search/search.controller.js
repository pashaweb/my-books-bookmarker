
class SearchController {
  constructor($stateParams, $http, $rootScope, $state ) {
    this.query = $stateParams.query || "";
    this.page = $stateParams.page || 0;
    this.maxResults = 40;

    this.startIndex = (this.page ) * this.maxResults;
    this._http = $http;
    this._rootScope = $rootScope;
    this.$state = $state;
    this.searchResults = {};
    this.totalItems = 0;
    this.currentPage = Number(this.page) + 1;
  }

  searchForQuery () {
    console.log("SearchController.searchForQuery");
    console.log("query", this.query); 
    this.$state.go("searchq", { query: this.query, page: 0 });
  };

  serchPage (page) {
    this.$state.go("searchq", { query: this.query, page: page });
  }

  pageChanged($event){
    console.log("pageChanged sdad", $event);
    this.$state.go("searchq", { query: this.query, page: $event.page - 1 });
  }

  $onInit () {
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
}
SearchController.inject = ["$stateParams", "$http", "$rootScope", "$state"];
angular
  .module("myApp")
  .controller("SearchController", SearchController);
