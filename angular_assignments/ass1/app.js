(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope']; 
function LunchCheckController($scope){
  $scope.ListOfDishes = "";
  $scope.message = "";

  $scope.CountDishes = function(){
    if ($scope.ListOfDishes.length == 0) {
      $scope.message = "Please enter data first";
    } else {
        var x = $scope.ListOfDishes.split(',').length;
        if (x <= 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        };
    }
  };

}

})();
