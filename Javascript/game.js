


var computerChoices = ['1', '2', '9']; 

   var GuessLeft = 0; 
   var wins = 0;
   var losses = 0;
   var YourGuess = 0;

   var guess= document.getElementById('yourNumber').value;

   console.log(guess);
   document.getElementById("directions-text").innerText = "Psychic Game"


  var directionsText = document.getElementById("directions-text");
   var userChoiceText = document.getElementById("userchoice-text");
   var computerChoiceText = document.getElementById("computerchoice-text");
   var winsText = document.getElementById("wins-text");
    var Guessleft = document.getElementById("Guessleft");
    var YourGuess = document.getElementById("YourGuess");



document.onkeyup = function (event) { 
     var userGuess = event.key;
     // if event.key is part of the computerChoices array then run the code
     if (computerChoices.includes(event.key)) {

     
    //  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



     if (userGuess === computerChoices[0]) {
            wins++
            document.getElementById("userchoice-text").innerHTML = "you win!";
          }

    //  } else if (userGuess === computerChoices[1]) {
    //    win++;
    //  } else if (userGuess === computerChoices[2]) {
    //    win++;
    //  }else if (userGuess === computerChoices[9]) {
    //    win++;
      else { 
       losses++
       document.getElementById("userchoice-text").innerHTML = "you lose!";
     }



//  document.getElementById("userchoice-text").innerHTML = "you win!";
  //  document.getElementById("computerchoice-text").innerHTML = "you win!";
   document.getElementById("losses-text").innerHTML = "losses"+losses;
   document.getElementById("wins-text").innerHTML ="winner"+win;
   document.getElementById("Guessleft").innerHTML ="trymorenumber";
   document.getElementById("YourGuess").innerHTML = "youguessisright";

    
    }}