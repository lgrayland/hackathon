// SUDO
// 
// LANDING PAGE: Objects are in Div id="landing"
// Animate objects (they come into the page from the sizes progressively)
// Once all objects are in, they all disolve 
// INSTRUCTION PAGE: Text is displayed in a box with animation
// GAME PAGE: Display all the objects, with a big red button "Play"
// floating on top. On click:
//     button disappears
//     cards are randomly moved around
//     other players score is displayed (version 3)
//     count down starts (Version 2)
//     game starts
//     each combination the score is increased by one
//     game stops after the count down reachs zero 
//  GAME COMPLETED:
//     score is diplayed
//     message on top is displayed (you win... funny text)
//     players score is updated (version 3)
//  FINISH THE GAME:
//     Finish page is displayed (picture of of WDI10 with message)


(function(){

  var app = angular.module('hackathonApp', ['ngAnimate']);

  app.controller('HackathonController', function($scope, $http){

    $scope.students = [];
    $scope.clickCount = 0;
    var matchedStudents = [];

    $http.get("data/students.json").success(function(data){
      $scope.students = data.sort(function() {
        return 0.5 - Math.random();
      });
      console.log(data);

      $scope.selectCard = function(student) {
        if($scope.first == student || $scope.second == student) {
          return;
        }
        $scope.increment();

        if ($scope.first && $scope.second) {
          checkForMatch();
          $scope.first = student;
          $scope.second = null;
        } else if ($scope.first) {
          $scope.second = student;
        } else {
          $scope.first = student;
        }

      };

      $scope.isSelected = function(student) {
        return $scope.first == student || $scope.second == student;
      };

      $scope.isMatched = function(student) {
        // return $scope.first.name == $scope.second.name;
        // return false; // is the student in the array of matched students?
        return matchedStudents.indexOf(student) != -1;
      };

      $scope.increment = function(){
        $scope.clickCount ++;
      };

      function checkForMatch(){
        if ($scope.first.name == $scope.second.name){
          matchedStudents.push($scope.first, $scope.second);
        }
      }
    });
});
})();