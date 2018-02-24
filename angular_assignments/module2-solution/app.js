(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService','$scope'];
function ToBuyController(ShoppingListCheckOffService,$scope) {
    $scope.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
    console.log($scope.toBuyItems);
    
    this.itemWasBought = function(itemIndex){
        ShoppingListCheckOffService.itemWasBought(itemIndex);
    }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService','$scope'];
function AlreadyBoughtController(ShoppingListCheckOffService,$scope) {
    $scope.alreadyBoughtItems = ShoppingListCheckOffService.getAlreadyBoughtList();
    console.log($scope.alreadyBoughtItems);
}

function ShoppingListCheckOffService() {
    var service = this;

    //Lists
    var toBuyList = [
      {
        name: "Coca cola",
        quantity: 10
      },
      {
        name: "Hamburger",
        quantity: 11
      },
      {
        name: "Chips",
        quantity: 22
      },
      {
        name: "Apples",
        quantity: 5
      },
      {
        name: "Oranges",
        quantity: 8
      }
    ];
    
    var alreadyBoughtList = [];

    service.itemWasBought = function(itemIndex){
        alreadyBoughtList.push(toBuyList[itemIndex]);
        toBuyList.splice(itemIndex, 1);
    }

    service.getToBuyItems = function() {
        return toBuyList;
    }

    service.getAlreadyBoughtList = function() {
        return alreadyBoughtList;
    }

}

})();