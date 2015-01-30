(function(){

  var app = angular.module('hackathonApp', ['ngAnimate']);

  app.controller('HackathonController', function($scope, $http, $timeout){

    $scope.students = [];
    $scope.clickCount = 0;
    $scope.matchedStudents = [];

    $http.get("data/students.json").success(function(data){
      $scope.students = data.sort(function() {
        return 0.5 - Math.random();
      });
      console.log(data);

      $scope.selectCard = function(student) {
        if($scope.first == student || $scope.second == student || $scope.isMatched(student)) {
          return;
        }
        $scope.increment();

        if ($scope.first) {
          $scope.second = student;
        } else {
          $scope.first = student;
        }

        if ($scope.first && $scope.second) {
          checkForMatch();
          $timeout(function() {
            $scope.first = null;
            $scope.second = null;
          }, 1000);
        }

      };

      $scope.isSelected = function(student) {
        return $scope.first == student || $scope.second == student;
      };

      $scope.isMatched = function(student) {
        return $scope.matchedStudents.indexOf(student) != -1;
      };

      $scope.increment = function(){
        $scope.clickCount ++;
      };

      $scope.gameWon = function(){
        return  $scope.students.length == $scope.matchedStudents.length;
      };

      function checkForMatch(){
        if ($scope.first.name == $scope.second.name){
          $scope.matchedStudents.push($scope.first, $scope.second);
        }
      }

    });
});
})();