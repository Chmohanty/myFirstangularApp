(function(){
    'use strict';
 
    
    angular.module('MenuCategoriesApp', [])

    .controller('MenuCategoriesCntroller', MenuCategoriesCntroller)
    .service('MenuCategoriesService', MenuCategoriesService);

   


    MenuCategoriesCntroller.$inject= ['MenuCategoriesService'];

   function MenuCategoriesCntroller(MenuCategoriesService){
    var menu = this;

    var promise = MenuCategoriesService.getMenuCategories();

    promise.then(function(response){
        menu.categories = response.data;
    })
    .catch(function(error){
        console.log("Somethig Went Terible Wrong");
    });
   }

     MenuCategoriesService.$inject = ['$http'];
     function MenuCategoriesService($http){
         var service = this;

         service.getMenuCategories = function (){
             var response = $http({
                 method: "GET",
                 url: ("http://davids-restaurant.herokuapp.com/categories.json")
             });
             return response;
         };
     };

}) ();