(function(){
    'use strict';

    angular.module('CounterApp', [])

    .controller('CounterController', CounterController);

    CounterController.$inject= ['$scope'];

   function CounterController($scope){
     $scope.onceCounter = 0;
     $scope.counter = 0;

       $scope.showNumberOfWatchers = function(){
           console.log("# of Watchers: ", $scope.$$watchersCount);
       };
       $scope.countOnce = function () {
           $scope.onceCounter = 1;
       };
       $scope.UpCounter = function(){
           $scope.counter++;
       };
       $scope.$watch(function(){
           console.log("!Digest loop Fired");
       });
    //    $scope.$watch('onceCounter', function (newValue, oldValue){
    //        console.log("old Value", oldValue);
    //        console.log("new Value", newValue);
    //    });
    //    $scope.$watch('counter', function (newValue, oldValue){
    //     console.log("Counter old Value", oldValue);
    //     console.log("Counter new Value", newValue);
    // });
   }
}) ();