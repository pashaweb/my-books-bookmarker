
'use strict';
  
class LogInController {
  constructor($state, $log) {
    this.$state = $state;
    this.$log = $log;
    this.email = "admin@gmail.com";
    this.password = "admin";
    this.errorMsg = "";
  }

  logIn() {
    this.$log.log("LogInController.logIn");
    if (this.email === "admin@gmail.com" && this.password === "admin") {
      this.$state.go("search");
    } else {

     this.errorMsg = "Invalid credentials";
    }
  }
}
LogInController.$inject = ["$state", "$log"];

angular.module("myApp").controller("LogInController", LogInController);
