(function(){
    'use strict';

    angular.module('MsgApp', [])

    .controller('MsgController', MsgController)
    .filter('loves', LovesFilter)
    .filter('truth', TruthFilter);

    MsgController.$inject= ['$scope', 'lovesFilter'];

    function MsgController($scope, lovesFilter){
       $scope.name = "Chira";
       $scope.stateOfBeing = "hungry";
       $scope.cookieCost = .45;

       $scope.sayMessage = function (){
           var msg = "Chira Likes to eat healthy snacks at night!";
           
           return msg; 
       };
       $scope.sayLovesMessage = function (){
        var msg = "Chira Likes to eat healthy snacks at night!";
        msg = lovesFilter(msg);
        return msg; 
    };

       $scope.feedchira = function (){
            $scope.stateOfBeing = "feed";
       };
    };

    function LovesFilter(){
        return function(input){
            input = input || "";
            input = input.replace("Likes", "loves");
            return input;
        };
    }
    function TruthFilter(){
        return function(input, target, replace){
            input = input || "";
            input = input.replace(target, replace);
            return input;
        }
    }
}) ();