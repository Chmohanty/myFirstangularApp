(function(){
    'use strict';
 
    var shoppingList1 = [
        "Milk","Donotos","Cookies","Chocolet","Peanut Butter","Pepto Bismol",
        "Pepto Bismol (Chocolet Flaver)","Pepto Bismol (Cookie Flavor)"
    ];
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

     $scope.addToList = function(){
         var newItem = {
             name: $scope.newItemName,
             quantity: $scope.newItemQuantity
         };
         $scope.shoppingList2.push(newItem);
     };
   }

}) ();