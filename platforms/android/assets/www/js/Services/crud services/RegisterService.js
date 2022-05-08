let registerService = angular.module('starter');

registerService.factory('registerService' , function($http) {
  function registerUser(user) {
    return $http.post("https://route-egypt-api.herokuapp.com/signup",user)
  }

  return {
    registerUser : registerUser
  }
})
