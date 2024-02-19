class Favorites{
    constructor(FavoritesService){
        this.FavoritesService = FavoritesService;
        this.favorites = [];
    }
    addFavorite(favorite){
        this.favorites.push(favorite);
    }
    removeFavorite(favorite){
        this.favorites = this.favorites.filter(fav => fav !== favorite);
    }

    $onInit(){
        this.favorites = this.FavoritesService.getFavorites();
        console.log(this.favorites);
    }
}


Favorites.inject = ["FavoritesService"];

angular.module("myApp").controller("FavoritesController", Favorites);