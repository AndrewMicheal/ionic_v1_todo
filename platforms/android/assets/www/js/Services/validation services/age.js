let ageService = angular.module('starter');

ageService.factory('ageService' , function() {

  let ageError = true;
  let ageErrorMessage = "";

  function validateAge(name , user) {
     if(name == "age") {
      let ageRegex = /^[1-9]\d$/;
      if(user.age == null) {
        console.log('age Null')
        ageErrorMessage = "Age is not allowed to be empty"
        ageError = true;
      } else if(!ageRegex.test(user.age)) {
        console.log('age Regex')
        ageErrorMessage = "Enter Valid age";
        ageError = true
      } else {
        console.log('false')
        ageErrorMessage = ""
        ageError = false;
      }
     }
  }

  function getAgeErrorMessage() {
    return ageErrorMessage
  }

  function getAgeError() {
    return ageError
  }

  return {
    validateAge ,
    getAgeErrorMessage ,
    getAgeError
  }
})
