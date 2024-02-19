'use strict';

class FavoritesTogeleController {
  constructor(FavoritesService) {
    this.isFavorite = false;
    this.FavoritesService = FavoritesService;
  }
  toggle(book) {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      this.FavoritesService.add(this.book);
    } else {
      this.FavoritesService.remove(this.book);
    }
  }

  $onInit() {
    this.isFavorite = this.FavoritesService.isFaoriteBook(this.book.id);
  }
}

FavoritesTogeleController.inject = ["FavoritesService"];

angular.module("myApp").component("favoritesTogele", {
  template: `
    <button ng-click="$ctrl.toggle($ctrl.book)" class="btn btn-primary">
    <i ng-if="$ctrl.isFavorite" class="fa fa-heart"></i>
    <i ng-if="!$ctrl.isFavorite" class="fa fa-heart-o"></i>
    </button>
    `,
  controller: FavoritesTogeleController,
  bindings: {
    book: "<",
  },
});
