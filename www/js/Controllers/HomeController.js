let HomeController = angular.module("starter");


HomeController.controller("HomeController" , function($scope , ToastService , $ionicPopup , deleteTodoService , tokenService ,$ionicModal , getTodoService , addTodoService , $state) {
  $scope.firstName = tokenService.getTokenInfo().first_name;
  $scope.lastName = tokenService.getTokenInfo().last_name;

  $ionicModal.fromTemplateUrl('templates/addTodo.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  let arr;
  if(JSON.parse(localStorage.getItem("isChecked")) == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("isChecked"))

    $scope.allIds = JSON.parse(localStorage.getItem("isChecked"));
  }


  getTodoService.getAllTodos(tokenService.getToken() , tokenService.getTokenInfo()._id).then(function({data}) {
    $scope.todos = data.Notes;
  });

  $scope.addTodo = function(todoForm) {
    let todo = {
      title : todoForm.title ,
      desc : todoForm.desc ,
      userID : tokenService.getTokenInfo()._id ,
      token : tokenService.getToken()
    }
    addTodoService.addTodo(todo).then(function({data}) {
      console.log(data);

      if(data.message === "success") {
        ToastService.showMessage('inserted', 'long' , 'bottom')
        resetForm(todoForm)
        getTodoService.getAllTodos(tokenService.getToken() , tokenService.getTokenInfo()._id).then(function({data}) {
          $scope.todos = data.Notes;
        });
        $scope.modal.hide();
      }
    })
  }

  function resetForm (form) {
    angular.copy({}, form);
  }

  $scope.showConfirm = function(id) {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Delete Todo',
      template: 'Are you sure you want to delete this todo?'
    });

    confirmPopup.then(function(res) {
      if(res) {
        deleteTodo(id);
      } else {
        console.log('You are not sure');
      }
    });
  };

  function deleteTodo(id) {
    deleteTodoService.deleteTodo(id , tokenService.getToken()).then(function({data}) {
      if(data.message ==='deleted') {
        ToastService.showMessage(data.message, 'long' , 'bottom')
        getTodoService.getAllTodos(tokenService.getToken() , tokenService.getTokenInfo()._id).then(function({data}) {
          $scope.todos = data.Notes;
        });
      }
    })
  }

  $scope.isChecked = function(isChecked , id) {
    if(isChecked) {
      arr.push(id);
      addLocalStorage(arr);
    } else {
      removeLocalStorage(id);
    }
  }

  function addLocalStorage() {
    localStorage.setItem("isChecked" , JSON.stringify(arr))
  }

  function removeLocalStorage(id) {
    let index = arr.indexOf(id);
    arr.splice(index , 1);
    addLocalStorage(arr);
  }


  $scope.siginOut = function() {
    localStorage.removeItem("token");
    $state.go('register')
  }
})
