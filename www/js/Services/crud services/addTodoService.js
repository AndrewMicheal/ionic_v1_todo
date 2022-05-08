let addTodoService = angular.module("starter");

addTodoService.factory("addTodoService" , function($http) {

  function addTodo(todo) {
    return $http.post("https://route-egypt-api.herokuapp.com/addNote" , todo);
  }

  return {
    addTodo
  }
})
