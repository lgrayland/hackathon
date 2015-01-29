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
    $scope.matchedStudents = [];

    $http.get("data/students.json").success(function(data){
      $scope.students = data;
      console.log(data);

      $scope.selectCard = function(student) {
        if ($scope.first) {
          $scope.second = student;
          console.log(student);
        } else {
          $scope.first = student;
        }

      };

      $scope.isSelected = function(student) {
        return $scope.first == student || $scope.second == student
      }

      $scope.isMatched = function(student) {
        return false; // is the student in the array of matched students?
      }


    });



  });


})();



  //      moves ++;
  //      clicked ++;

  //      if (clicked === 1){
  //        firstCard = $(this);  
  //        if (!firstCard.hasClass("selected") || !firstCard.hasClass("matched")){
  //          firstChoice = firstCard.addClass("selected").attr('class').split(' ')[0];      
  //        }
  //        console.log(firstCard)
  //      } else if (clicked === 2){
  //        secondCard = $(this);
  //        if (!secondCard.hasClass("selected") || !secondCard.hasClass("matched")){
  //         secondChoice = secondCard.addClass("selected").attr('class').split(' ')[0];

  //       console.log(secondCard);
  //       if (firstChoice === secondChoice){
  //        firstCard.addClass("matched");
  //        secondCard.addClass("matched");
  //      } else {
  //        setTimeout(function() {
  //          firstCard.removeClass("selected");
  //          secondCard.removeClass("selected");
  //        }, 1000);      
  //      }

  //      clicked = 0;

  //      }


  //  };

  // //   $scope.students = students.sort(function() {
  // //     return .5 - Math.random();
  // //   });




  // var myGame = myGame || {};
  // var firstCard;
  // var firstChoice;
  // var secondCard;
  // var secondChoice;
  // var clicked = 0;
  // var moves = 0;

  

//     // if cards with class matched = 24 
//     if ($(".matched").length >= 34){
//       $("#number-of-moves").text(moves); 
//       $("#gameOver").show();

//     }
//   }




// });



//   };


//   $(function(){
//     myGame.initialize();

//   });