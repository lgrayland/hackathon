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