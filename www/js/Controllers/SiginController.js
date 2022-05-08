
let siginController = angular.module('starter');

siginController.controller('SiginController' , function($scope , emailService , signInService , $state , ToastService) {
  $scope.emailErr = "";
  $scope.error = "";
  $scope.dsblBtn = true

  $scope.getUser = function(name , user) {
    emailService.validateEmailName(name, user);
    $scope.emailErr = emailService.getEmailErrorMessage();
    if(!emailService.getEmailError()) {
      if(name == "password") {
        if(user.password != "") {
          $scope.dsblBtn = false;
        } else {
          $scope.dsblBtn = true;
        }
      }
    } else {
      $scope.dsblBtn = true;
    }
  }

  $scope.sigin = function(user) {
    signInService.signIn(user).then(function({data}){
      console.log(data);
      if(data.message === "success") {
        ToastService.showMessage(data.message , 'long' , 'bottom')
        localStorage.setItem('token' , data.token)
        $scope.siginForm.$setPristine();
        $scope.user = {};
        $state.go('home', null, {
          location: 'replace'
      })
      }
    })
  }
})
