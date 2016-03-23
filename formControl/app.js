//create angular app
var validationApp = angular.module('validationApp', []);

//create angular controller
validationApp.controller('mainController', function($scope){

  //function to submit the form after all validation occured
  $scope.submitForm = function(isValid){
    //check to make sure form is valid
    if(isValid){
      alert('our form is amazing');
    }
  };
});
