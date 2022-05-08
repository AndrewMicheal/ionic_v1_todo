let lastNameService = angular.module('starter');

lastNameService.factory('lastNameService' , function() {

  let lastNameError = true;
  let lastNameErrorMessage = "";

   function validateLastName(name , user) {
     if(name == "last_name") {
      let lastNameRegex = /^([a-zA-Z]+\s*[A-Z]*)+$/;
      if(user.last_name == "") {
        lastNameErrorMessage = "Last Name is not allowed to be empty"
        lastNameError = true;
      } else if(!lastNameRegex.test(user.last_name)) {
        lastNameErrorMessage = "Last Name Characters Only"
        lastNameError = true;
      } else {
        lastNameErrorMessage = ""
        lastNameError = false;
      }
     }
    }

    function getLastNameErrorMessage() {
      return lastNameErrorMessage
    }

    function getLastNameError() {
      return lastNameError
    }

    return {
      validateLastName ,
      getLastNameError ,
      getLastNameErrorMessage
    }

})
