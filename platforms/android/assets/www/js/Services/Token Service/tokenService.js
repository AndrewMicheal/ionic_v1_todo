let tokenService = angular.module('starter');

tokenService.factory("tokenService" , function() {

  let token = localStorage.getItem("token");

  function getToken() {
    return token;
  }

  function getTokenInfo() {
      let token = localStorage.getItem("token");
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace('-', '+').replace('_', '/');
      let decode = JSON.parse(window.atob(base64));
      return decode
  }

  return {
    getToken ,
    getTokenInfo
  }

})
