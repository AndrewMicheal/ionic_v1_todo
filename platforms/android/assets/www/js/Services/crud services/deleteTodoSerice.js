let deleteTodoService = angular.module("starter");

deleteTodoService.factory("deleteTodoService" , function($http) {

  function deleteTodo(NoteID , token) {
    return $http({
      method: 'DELETE',
      url: 'https://route-egypt-api.herokuapp.com/deleteNote',
      data: {
          "NoteID" : NoteID ,
          "token" : token
      },
      headers: {
          'Content-type': 'application/json;charset=utf-8'
      }
  })
  }

  return {
    deleteTodo
  }
})
