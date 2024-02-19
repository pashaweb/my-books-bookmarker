
'use strict';
  
class LogInController {
  constructor($state, $log, $rootScope) {
    this.$state = $state;
    this.$log = $log;
    this.email = "admin@gmail.com";
    this.$rootScope = $rootScope;
    this.password = "admin";
    this.errorMsg = "";
    console.log("rootScope", this.$rootScope.loggedIn);
  }

  logIn() {
    this.$log.log("LogInController.logIn");
    if (this.email === "admin@gmail.com" && this.password === "admin") {
      this.$rootScope.loggedIn = true;
      console.log("rootScope", this.$rootScope);
      this.$state.go("search");
    } else {

     this.errorMsg = "Invalid credentials";
    }
  }
}
LogInController.$inject = ["$state", "$log", "$rootScope"];

angular.module("myApp").controller("LogInController", LogInController);
