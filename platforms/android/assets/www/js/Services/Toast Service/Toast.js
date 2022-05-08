angular.module("ngCordova").factory('ToastService', function($ionicPlatform, $cordovaToast) {

  return {
    showMessage: function(message , duration , location) {
      return $ionicPlatform.ready()
        .then(function() {
          return $cordovaToast.show(message , duration , location);
        })
    }
  };

});
