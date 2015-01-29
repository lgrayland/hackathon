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






//click on a card, give class selected
  // click second card, give class selected
  //check first class against second class. 
  //compared cards 
  //if cards are matching, give class matched
  // if cards dont't match, take away class selected. 


  //add congratulation when all cards match. 
  console.log("Hello");

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