(function(){
    'use strict';

    angular.module('MsgApp', [])

    .controller('MsgController', MsgController);

    MsgController.$inject=[$scope];

    function MsgController($scope){
       $scope.name = "Chira";
       $scope.stateOfBeing = "hungry";
       $scope.sayMessage = function (){
           return "Chira Likes to eat healthy snacks at night!"; 
       };
       $scope.feedchira = function (){
            $scope.stateOfBeing = "feed";
       };
    }
}) ();