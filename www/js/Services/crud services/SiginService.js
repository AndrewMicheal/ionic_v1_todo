let signInService = angular.module("starter");

signInService.factory("signInService" , function($http) {

  function signIn(user) {
    return $http.post("https://route-egypt-api.herokuapp.com/signin",user)
  }

  return {
    signIn : signIn
  }
})
