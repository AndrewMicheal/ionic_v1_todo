let firstNameService = angular.module('starter');

firstNameService.factory('fNameValidateService' , function() {

  let firstNameError = true;
  let firstNameErrorMessage = "";

  function validateFirstName(name , user) {
     if(name == "first_name") {
      let firstNameRegex = /^([a-zA-Z]+\s*[A-Z]*)+$/;
      if(user.first_name == "") {
        firstNameErrorMessage = "First Name is not allowed to be empty"
        firstNameError = true;
      } else if(!firstNameRegex.test(user.first_name)) {
        firstNameErrorMessage = "First Name Characters Only";
        firstNameError = true
      } else {
        firstNameErrorMessage = ""
        firstNameError = false;
      }
     }
  }

  function getFNameErrorMessage() {
    return firstNameErrorMessage
  }

  function getFNameError() {
    return firstNameError
  }

  return {
    validateFirstName ,
    getFNameErrorMessage ,
    getFNameError
  }
})
