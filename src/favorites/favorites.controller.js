'use strict';

angular.module("myApp").controller("FavoritesController",['FavoritesService', function(FavoritesService){
    this.FavoritesService = FavoritesService;
    this.favorites = [];
    this.$onInit = function(){
        this.favorites = this.FavoritesService.getFavorites();
    }
}]);