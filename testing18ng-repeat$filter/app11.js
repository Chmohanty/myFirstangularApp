(function(){
    'use strict';
 
    var shoppingList1 = [
        "Milk","Donotos","Cookies","Chocolet","Peanut Butter","Pepto Bismol",
        "Pepto Bismol (Chocolet Flaver)","Pepto Bismol (Cookie Flavor)"
    ];
    var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var shoppingList2 = [
        {
            name: "Milk",
            quantity: "2"
        },
        {
            name: "Donotos",
            quantity: "200"
        },
        {
            name: "Cookies",
            quantity: "300"
        },
        {
            name: "Chocolet",
            quantity: "2"
        }
    ];
    angular.module('ShoppingListApp', [])

    .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject= ['$scope'];

   function ShoppingListController($scope){
     $scope.shoppingList1 = shoppingList1;
     $scope.shoppingList2 = shoppingList2;
     $scope.numberArray = numberArray;

     $scope.addToList = function(){
         var newItem = {
             name: $scope.newItemName,
             quantity: $scope.newItemQuantity
         };
         $scope.shoppingList2.push(newItem);
     };
   }

}) ();