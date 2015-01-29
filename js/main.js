(function(){

  var app = angular.module('hackathonApp', ['ngAnimate']);

  app.controller('HackathonController', function($scope, $http){
    
    $scope.students = [];

    $http.get("data/students.json").success(function(data){
      $scope.students = data;
      console.log(data);
    });

   $scope.selectStudent = function(student) {
       $scope.selectedStudent = student;
   };
    
  //   $scope.students = students.sort(function() {
  //     return .5 - Math.random();
  //   });

  // $scope.selectedStudent = false;

    


  });
})();



  var myGame = myGame || {};
  var firstCard;
  var firstChoice;
  var secondCard;
  var secondChoice;
  var clicked = 0;
  var moves = 0;

  myGame.initialize = function(){

    $(".cards").on("click", function(){
      moves ++;
      clicked ++;

      if (clicked === 1){
        firstCard = $(this);  
        if (!firstCard.hasClass("selected") || !firstCard.hasClass("matched")){
          firstChoice = firstCard.addClass("selected").attr('class').split(' ')[0];      
        }
        console.log(firstCard)
      } else if (clicked === 2){
        secondCard = $(this);
        if (!secondCard.hasClass("selected") || !secondCard.hasClass("matched")){
         secondChoice = secondCard.addClass("selected").attr('class').split(' ')[0];

       console.log(secondCard);
       if (firstChoice === secondChoice){
        firstCard.addClass("matched");
        secondCard.addClass("matched");
      } else {
        setTimeout(function() {
          firstCard.removeClass("selected");
          secondCard.removeClass("selected");
        }, 1000);      
      }

      clicked = 0;

      }

    // if cards with class matched = 24 
    if ($(".matched").length >= 34){
      $("#number-of-moves").text(moves); 
      $("#gameOver").show();

    }
  }




});



  };


  $(function(){
    myGame.initialize();

  });