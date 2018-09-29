(function(){
    'use strict';

    angular.module('DIApp', [])

    .controller('DIcontroller',DIcontroller);
    
    DIcontroller.$inject = ['$scope', '$filter'];
    function DIcontroller ($scope, $filter){
        $scope.name="Chira"; 
        
        $scope.upper = function(){
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };
      };
      
}) ();