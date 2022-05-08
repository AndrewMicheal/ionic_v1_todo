let emailService = angular.module('starter');

emailService.factory('emailService' , function() {

  let emailError = true;
  let emailErrorMessage = "";

  function validateEmailName(name , user) {
     if(name == "email") {
      let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if(user.email == "") {
        emailErrorMessage = "Email is not allowed to be empty"
        emailError = true;
      } else if(!emailRegex.test(user.email)) {
        emailErrorMessage = "Enter Valid Email";
        emailError = true
      } else {
        emailErrorMessage = ""
        emailError = false;
      }
     }
  }

  function getEmailErrorMessage() {
    return emailErrorMessage
  }

  function getEmailError() {
    return emailError
  }

  return {
    validateEmailName ,
    getEmailErrorMessage ,
    getEmailError
  }
})






