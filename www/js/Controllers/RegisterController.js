let RegisterController = angular.module('starter');

RegisterController.controller('RegisterController' , function($scope , registerService , $state , fNameValidateService , lastNameService , emailService , ageService , ToastService) {

  $scope.firstNameErr = "";
  $scope.lastNameErr = "";
  $scope.ageErr = "";
  $scope.emailErr = "";

  $scope.dsblBtn = true

  $scope.getUser = function(name,user) {
    fNameValidateService.validateFirstName(name,user)
    $scope.firstNameErr = fNameValidateService.getFNameErrorMessage();

    lastNameService.validateLastName(name,user);
    $scope.lastNameErr = lastNameService.getLastNameErrorMessage();

    ageService.validateAge(name,user);
    $scope.ageErr = ageService.getAgeErrorMessage()

    emailService.validateEmailName(name, user);
    $scope.emailErr = emailService.getEmailErrorMessage();

    if(!fNameValidateService.getFNameError() && !lastNameService.getLastNameError() && !emailService.getEmailError() && !ageService.getAgeError()) {
      $scope.dsblBtn = false;
    } else {
      $scope.dsblBtn = true;
    }
  }

  $scope.register = function(user) {
    registerService.registerUser(user).then(function({data}){

      console.log($scope.registerForm)
      if(data.message == "success") {
        ToastService.showMessage(data.message , 'long' , 'bottom')
        $scope.registerForm.$setPristine();

        $scope.user = {};
        $state.go('sigin')
      }
    })
  }
})
