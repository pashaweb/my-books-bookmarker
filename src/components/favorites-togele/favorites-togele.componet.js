'use strict';


angular.module("myApp").component("favoritesTogele", {
  template: `
    <button ng-click="$ctrl.toggle($ctrl.book)" class="btn btn-primary">
    <i ng-if="$ctrl.isFavorite" class="fa fa-heart"></i>
    <i ng-if="!$ctrl.isFavorite" class="fa fa-heart-o"></i>
    </button>
    `,
  controller:["FavoritesService", "$scope", function(FavoritesService) {
    this.isFavorite = false;
    this.FavoritesService = FavoritesService;

    this.toggle = function() {

      this.isFavorite = !this.isFavorite;
      if (this.isFavorite) {
        this.FavoritesService.add(this.book);
      } else {
        this.FavoritesService.remove(this.book);
      }
    }

    this.$onInit = function() {
      this.isFavorite = this.FavoritesService.isFaoriteBook(this.book.id);
    }


  }],
  bindings: {
    book: "<",
  },
});
