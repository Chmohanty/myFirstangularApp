(function(){
    'use strict';
 
    
    angular.module('ShoppingListApp', [])

    .controller('ShoppingListController', ShoppingListController)
    .service('ShoppingListService', ShoppingListService)
    .service('WeightLossFilterService', WeightLossFilterService);

   


    ShoppingListController.$inject= ['ShoppingListService'];

   function ShoppingListController(ShoppingListService){
    var list = this;

    

    list.items = ShoppingListService.getItems();

    list.itemName = "";
    list.itemQuantity = "";

    list.addItem = function (){
        try{
            ShoppingListService.addItem(list.itemName, list.itemQuantity);
        }catch(error){
            list.errorMessage = error.message;
        }
    };
    list.removeItem = function(itemIndex){
        ShoppingListService.removeItem(itemIndex);
    };
   }

   ShoppingListService.$inject = ['$q', 'WeightLossFilterService'];
   function ShoppingListService($q, WeightLossFilterService) {
       var service = this;

       var items = [];
        
    //    service.addItem = function(name, quantity){
    //        var promise = WeightLossFilterService.checkName(name);

    //        promise.then(function(responce){
    //            var nextPromise = WeightLossFilterService.checkQuantity(quantity);

    //            nextPromise.then(function(result){
    //                var item = {
    //                    name: name,
    //                    quantity: quantity
    //                };
    //                items.push(item);
    //            }, function(errorResponse){
    //                console.log(errorResponse.message);
    //            });
    //        }, function(errorResponse){
    //            console.log(errorResponse.message);
    //        });
    //    };

        //  service.addItem = function(name, quantity){
        //      var promise = WeightLossFilterService.checkName(name);
              
        //      promise
        //      .then(function(responce){
        //          return WeightLossFilterService.checkQuantity(quantity);
        //      })
        //      .then(function(responce){
        //          var item = {
        //              name: name,
        //              quantity: quantity
        //          };
        //          items.push(item);
        //      })
        //      .catch(function(errorResponse){
        //          console.log(errorResponse.message);
        //      });
        //  };


        service.addItem = function(name, quantity){
            var namePromise = WeightLossFilterService.checkName(name);
            var quantityPromise = WeightLossFilterService.checkQuantity(quantity);

            $q.all([namePromise, quantityPromise]).
            then(function(responce){
                var item = {
                    name: name,
                    quantity: quantity
                };
                items.push(item);
            })
            .catch(function(errorResponse){
                  console.log(errorResponse.message);
            });
        };

        
       service.removeItem = function(itemIndex){
           items.splice(itemIndex, 1);
       };
       service.getItems = function(){
           return items;
       };
   };

   WeightLossFilterService.$inject = ['$q', '$timeout'];

   function WeightLossFilterService($q, $timeout){
       var service = this;

       service.checkName = function(name){
           var deferred = $q.defer();

           var result = {
               message: ""
           };

           $timeout(function(){
               //check for Cookies
               if (name.toLowerCase().indexOf('cookie') == -1){
                   deferred.resolve(result)
               }
               else{
                   result.message = "Stay out of cookies, Chira!";
                   deferred.reject(result);
               }
           }, 3000);
           return deferred.promise;
       };
     
       service.checkQuantity = function(quantity){
           var deferred = $q.defer();
           var result = {
               message: ""
           };

           $timeout(function(){
               //Check for Too many Boxes
               if(quantity < 6){
                   deferred.resolve(result);
               }
               else{
                   result.message = "That's too much, Chira!";
                   deferred.reject(result);
               }
           }, 1000);
           return deferred.promise;
       };
   }
   function ShoppingListFactory(){
       var factory = function(maxItems){
            return new ShoppingListService(maxItems);
       };
       return factory;
   }
   function ShoppingListServiceProvider(){
       var provider = this;

       provider.defaults = {
           maxItems:10
       };
       provider.$get = function(){
           var shoppingList = new ShoppingListService(provider.defaults.maxItems);

           return shoppingList;
       };
   }

}) ();