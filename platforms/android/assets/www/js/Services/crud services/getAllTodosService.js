let getTodoService = angular.module("starter");

getTodoService.factory("getTodoService" , function($http) {

  function getAllTodos(Token , userID) {
    return $http.get("https://route-egypt-api.herokuapp.com/getUserNotes" , {
      headers: {
        Token ,
        userID
      }
    });
  }

  return {
    getAllTodos
  }

})
