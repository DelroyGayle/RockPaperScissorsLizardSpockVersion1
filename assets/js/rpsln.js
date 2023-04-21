// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function () {
   runTheGame();
});

// As described in https://developer.mozilla.org/en-US/docs/Web/API/Window/error_event

window.addEventListener("error", (event) => {
   // Remove everything from the DOM's body
   const bodyElement = document.body;
   while (bodyElement.firstChild) {
      bodyElement.removeChild(bodyElement.firstChild);
   }

   // As described in https://www.w3schools.com/jsref/met_document_createelement.asp 
   // Create a DIV Element
   const newDiv = document.createElement("div");
   newDiv.innerHTML = "<h1>An Internal Error Has Occurred:</h1>";

   // Create element for the error message
   let errorMessage = document.createElement("h2");
   errorMessage.innerText = event.message;

   // Add the message to the newly created div
   newDiv.appendChild(errorMessage);

   // Show the line number where the error occurred
   errorMessage = document.createElement("h2");
   errorMessage.innerText = `Line Number: ${event.lineno}`;
   newDiv.appendChild(errorMessage);

   // Add styling
   newDiv.classList.add("error-message-style");

   // Centre the error message
   bodyElement.classList.add("centre-error-message");

   // Display the error on the webpage
   bodyElement.appendChild(newDiv);

});

/**
 * The Main Game Routine
 */

function runTheGame() {

   /* Initialise Constants */

   const delayBetweenPlay = 4000; // 4 seconds

   // Image Names

   const theListOfImages = [
      "rock1_dwayne.png",
      "rock2_dwayne.png",
      "rock3_bengrimm_thething.webp",
      "paper1.jpg",
      "paper2_fadilah_unsplash.jpg",
      "paper3_earth_teen_titans.webp",
      "scissors1.png",
      "scissors2_daniil_onischenko_unsplash.jpg",
      "scissors3_earth_teen_titans.webp", // fillImage1 = 8
      "lizard1_drconners.webp", // fillImage2 = 9
      "lizard2_gorn.webp",
      "lizard3_gorn_arena.webp",
      "spock1.png",
      "spock2.png",
      "spock3.png"];

   // Image's Alternate Text

   const theListOfAltText = [
      "The Rock AKA Dwayne Johnson",
      "WWF Wrestler 'The Rock' AKA Dwayne Johnson",
      "Marvel Comics Hero 'The Thing' AKA Ben Grimm",
      "Cartoon of a sheet of hole-punched paper with a smiling face",
      "A person's left hand showing the paper gesture in front of a board with different coloured sticky notes",
      "DC Comics Teen Titans Character whose name is Paper!",
      "Black and white drawing of Edgar Scissorhands and Kim Boggs",
      "Photo of Daniil Onischenko dressed up as Edgar Scissorhands",
      "DC Comics Teen Titans Character whose name is Scissors!",
      "Marvel Comics Character 'The Lizard' AKA Dr Curtis Connors",
      "Star Trek Character 'The Gorn'; a bipedal reptilian",
      "Star Trek Character 'The Gorn'; a bipedal reptilian",
      "Star Trek Character 'Spock' as portrayed by Leonard Simon Nimoy (1931 - 2015)",
      "Clip Art Icon of Star Trek Character 'Spock'",
      "Star Trek Character 'Spock' as portrayed by Leonard Simon Nimoy (1931 - 2015)"
   ];

   // Us object-fit: fill; except for these two images
   const fillImages = [8, 9];

   /* Give each weapon its own number and letter    
      N for Spock i.e. Leonard Simon Nimoy (March 26, 1931 – February 27, 2015)

      NOTE: The numbering is significant
      The weapons must be numbered in this order 
      Rock-Paper-Scissors-Spock-Lizard   
      See README.md and http://docmadhattan.fieldofscience.com/2015/02/rock-paper-scissors-lizard-spock.html 
      for details
   */

   const hand_weapons =
      [[0, "R", "Rock"],
      [1, "P", "Paper"],
      [2, "S", "Scissors"],
      [3, "N", "Spock"],
      [4, "L", "Lizard"],
      ];

   /* Using the above numbers to determine who beats who?
      e.g. 2 for Scissors, 4 for Lizard; therefore "24" means: Scissors decapitates Lizard
           3 for Spock, 0 for Rock; therefore "30" means: Spock vaporises Rock
   */
   const actions = {
      "21": "cuts",
      "10": "covers",
      "04": "crushes",
      "43": "poisons",
      "32": "smashes",
      "24": "decapitates",
      "41": "eats",
      "13": "disproves",
      "30": "vaporises",
      "02": "crushes"
   };

   /*
      NOTE: The button order is different as it matches the name of the game
      Therefore need an array of indices to reflect: 
      Rock Paper Scissors Lizard Spock
      values as shown in 'hand_weapons'
   */
   const buttonOrderArray = [0, 1, 2, 4, 3];

   // Used to indicate the result of a round
   const playerWon = 1;
   const playerTies = 0;
   const playerLost = -1;

   // Location of images
   const imagesPath = "assets/images/";

   // Set up all the variables reflecting DOM elements 

   const displayContainerElem = document.getElementById("display-container");
   const currentRoundNumberElem = document.getElementById("current-round-number");
   const numberOfRoundsElem = document.getElementById("number-of-rounds");
   const numberOfTiesElem = document.getElementById("number-of-ties");
   const playerScoreElem = document.getElementById("player-score");
   const computerScoreElem = document.getElementById("computer-score");
   // DG7
   const introElem = document.getElementById("intro");
   const outcomeElem = document.getElementById("outcome");
   const explanationElem = document.getElementById("explanation");

   // Setup and Initialise Variables
   let playerName = null;
   let currentNumberOfRounds = 0;
   let total_numberof_rounds;
   let random_chosen = false;

   // Add Event Listeners to the buttons
   let buttonsList = document.getElementsByClassName("weapon-button");

   for (let i = 0; i < buttonsList.length; i++) {
      /* 
         Note: for the 4th Button (Lizard, i=3) the value must be 4 i.e. [4, "L", "Lizard"]
               for the 5th Button (Spock, i=4) the value must be 3 i.e. [3, "N", "Spock"]
         In order for the winner to be mathematically determined using modulo 5
         So firstly, determine the correct value using 
         buttonOrderArray = [0,1,2,4,3];
      */
      const index = buttonOrderArray[i];

      // Now fetch the relevant info to set up the button
      const weaponValues = hand_weapons.find(element => element[0] === index);
      // Check for errors
      if (weaponValues === undefined) {
         const errorMessage = `Unknown button with this number: ${index}`;
         alert(errorMessage);
         throw `${errorMessage}. Aborting!`;
      }

      // In this event, Call 'showThisImage' with the corresponding 'weaponValues' to display the images
      // Then determine the computer opponent's response
      buttonsList[i].addEventListener("click", function () {
         showThisImage(weaponValues);
         const computerWeaponValue = determineComputerChoice();
         showThisImage(computerWeaponValue);
         updateScoresThenDetermineNextAction(weaponValues, computerWeaponValue);
      });
   }

   // Initial Form
   const initialForm = document.getElementById("initial-form-id");
   initialForm.addEventListener("submit", (event) => {
      event.preventDefault();
      // Fetch the relevant form info
      const myForm = document.getElementsByClassName("show-form")[0]
      const formPlayerName = myForm.player_name.value.trim();
      const formNumberOfRounds = parseInt(myForm.total_numberof_rounds.value);
      // if 'random' was selected generate a random number between 1 and 15 inclusive
      [total_numberof_rounds, random_chosen] = Number.isNaN(formNumberOfRounds) ?
                                                   [Math.floor(Math.random() * 15) + 1, true] :
                                                   [formNumberOfRounds, false];
      // Handle submit. That is, remove the form and show the game layout
      document.getElementsByClassName("form-container")[0].style.display = "none";
      numberOfRoundsElem.innerText = String(total_numberof_rounds);
      document.getElementsByClassName("show-game")[0].style.display = "block";

      // Set up the Player's Name if it was inputted
      if (formPlayerName !== "") {
         playerName = titleCase(formPlayerName);
      }
      document.getElementById("player-name-heading").innerText = playerName ?? "Player";

      playGame();
   });

   // Create Play Again Button
   const playAgainButton = document.createElement("button");
   playAgainButton.innerText = "Play Again!";
   // Add styling
   playAgainButton.classList.add("playagain-button");
   playAgainButton.addEventListener("click", function (event) {
      event.preventDefault();
      resetInOrderToPlayAgain();
      playGame();
   });

   // Create the 'Your Move' indicator
   const your_move_indicator = create_your_move();


   function hideMessages() {
      // Hide messages
      outcomeElem.classList.add("hide-element");
      explanationElem.classList.add("hide-element");
      // displayContainerElem.classList.add("yourmove");
      displayContainerElem.appendChild(your_move_indicator);
      
   }

   function playGame() {
      // Enable game buttons
      enableButtons();
      // Hide messages
      hideMessages();
   }

   /**
    * imageInfo has the form [4, "L", "Lizard"]
    * So fetch the middle letter to determine type of image
    * Then pick a random number 0, 1 or 2
    * Add that to the corresponding base index in imageIndices
    * Retrieve the corresponding image and its alternate text
    * Then display the image
    */

   function showThisImage(imageInfo) {
      // Disable the other buttons so that there is no user interruption
      disableButtons();
      const imageIndices = {
         R: 0, // Rock: 0 to 2
         P: 3, // Paper: 3 to 5
         S: 6, // Scissors: 6 to 8
         L: 9, // Lizard: 9 to 11
         N: 12, // Spock: 12 to 14
      }

      // imageInfo EG [4, "L", "Lizard"]
      // So fetch the middle letter to determine type of imaeg
      // Check for errors
      const imageCharacter = imageInfo[1];
      if (!imageCharacter || imageIndices[imageCharacter] === undefined) {
         const errorMessage = `Unknown image info: ${imageInfo}`;
         alert(errorMessage);
         throw `${errorMessage}. Aborting!`;
      }

      let randomNumber = Math.floor(Math.random() * 3);
      randomNumber += imageIndices[imageCharacter];

      // Remove any classes from displayContainer i.e. the Your Move message
      displayContainerElem.classList.remove("yourmove");
      // Also remove the last child if it is not an image i.e. a message or a <div>
      const theLast = displayContainerElem.lastElementChild;
      if (theLast && theLast.nodeName !== "IMG") {
         displayContainerElem.removeChild(theLast);
      }
      // Create and Add Image
      const theImage = document.createElement("img");
      theImage.src = imagesPath + theListOfImages[randomNumber];
      theImage.alt = theListOfAltText[randomNumber];
      // Use 'object-fit': cover except for two exceptions
      theImage.style.objectFit = fillImages.indexOf(randomNumber) < 0 ? "cover" : "fill";
      displayContainerElem.appendChild(theImage);
   }

   /**
    * Determine the computer move and display the corresponding image
    */

   // DG8
   function determineComputerChoice() {
      const thinkingMessage = document.createElement("p");
      thinkingMessage.innerText = "THINKING!";
      displayContainerElem.appendChild(thinkingMessage);

      /* DG      
            For now, simply use a random number 0-4 inclusive
      */
      return hand_weapons[Math.floor(Math.random() * 5)];
   }

   /**
    * Determine the Winner/Loser
    * Update the scores
    * Update the number of rounds
    * Then determine the next action
    */

   function updateScoresThenDetermineNextAction(playerWeaponValues, computerWeaponValues) {
      // EG for Rock vs. Paper 
      // playerWeaponValues => [0,R,Rock]
      // computerWeaponValues ==> [1,P,Paper]
      const playerWeaponNumber = playerWeaponValues[0];
      const computerWeaponNumber = computerWeaponValues[0];
      const result = determineWhoWonThatRound(playerWeaponNumber, computerWeaponNumber);
      setupOutcomeMessage(playerWeaponValues, computerWeaponValues, result);
      incrementCurrentRoundNumber();
      // Make visible the relevant outcome messages
      outcomeElem.classList.remove("hide-element");
      explanationElem.classList.remove("hide-element");
      // Pause for a few seconds then move on
      setTimeout(determineWhatHappensNext, delayBetweenPlay);
   }

   /**
    * EG for Rock vs. Paper 
    * playerWeaponNumber => 0 
    * computerWeaponNumber => 1
    * 
    * Mathematically, using modulo-5 the winner can be determined as follows:
    * Subtract the number chosen by player two i.e. the computer from the number chosen by player one; 
    * and then take the remainder modulo 5 of the result. 
    * Player one is the victor if the difference is one or three (i.e. odd), 
    * and player two is the victor if the difference is two or four (i.e. even). 
    * If the difference is zero, the round is a tie.
    * 
    * For example
    * if Player used 0 (Rock) and Computer used 1 (Paper)
    * 0-1 = -1 
    * -1 + 5 = 4 (added 5 because it was a negative number)
    * Since 4 is even, Computer wins - Player loses
    * Indeed, Paper covers Rock!
    * 
    * If the Player used 4 (Lizard) and Computer used 1 (Paper)
    * 4-1 = 3
    * Since 3 is odd, Player wins - Computer loses
    * Indeed, Lizard eats Paper!
    */

   function determineWhoWonThatRound(playerWeaponNumber, computerWeaponNumber) {
      if (playerWeaponNumber === computerWeaponNumber) {
         // Tie!
         incrementTies();
         return playerTies;
      }

      let diff = playerWeaponNumber - computerWeaponNumber;
      if (diff < 0) {
         diff += 5;
      }

      diff %= 5;

      if (diff % 2 !== 0) {
         // odd; player wins!
         incrementPlayerWins();
         return playerWon;
      } else {
         // even; computer wins!
         incrementComputerWins();
         return playerLost;
      }
   }

   /**
    * Gets the current number of ties from the DOM and increments it by 1
    */

   function incrementTies() {
      let oldScore = parseInt(numberOfTiesElem.innerText);
      numberOfTiesElem.innerText = String(++oldScore);
   }

   /**
    * Gets the current number of Player Wins from the DOM and increments it by 1
    */

   function incrementPlayerWins() {
      let oldScore = parseInt(playerScoreElem.innerText);
      playerScoreElem.innerText = String(++oldScore);
   }

   /**
    * Gets the current number of Computer Wins from the DOM and increments it by 1
    */

   function incrementComputerWins() {
      let oldScore = parseInt(computerScoreElem.innerText);
      computerScoreElem.innerText = String(++oldScore);
   }

   /**
    * Increment the variable that represents the Current number of Rounds
    */

   function incrementCurrentRoundNumber() {
      currentRoundNumberElem.innerText = String(++currentNumberOfRounds);
   }

   function setupOutcomeMessage(playerWeaponValues, computerWeaponValues, result) {
      // EG for Rock vs. Paper 
      // playerWeaponValues => [0,R,Rock]
      // computerWeaponValues ==> [1,P,Paper]

      if (result === playerTies) {
         outcomeElem.innerText = "Tie!";
         explanationElem.innerText = "";
         return;
      }

      const playerWeaponNumberChar = String(playerWeaponValues[0]);
      const computerWeaponNumberChar = String(computerWeaponValues[0]);

      // Determine the correct verb
      const index = playerWeaponNumberChar + computerWeaponNumberChar;
      let verb = actions[index];
      if (verb) {
         explanationElem.innerText = `${playerWeaponValues[2]} ${verb} ${computerWeaponValues[2]}`;
      } else {
         /*
            if null, swop the numbers around e.g. 
            "32" instead of "23" in order to fetch
            "smashes"
         */
         verb = actions[computerWeaponNumberChar + playerWeaponNumberChar];
         // Swop! In order to determine the right name of each weapon for the message
         [playerWeaponValues, computerWeaponValues] = [computerWeaponValues, playerWeaponValues];
         explanationElem.innerText = `${playerWeaponValues[2]} ${verb} ${computerWeaponValues[2]}`;
      }
      outcomeElem.innerText = result === playerWon ? "You Win!" : "You Lose!";
   }

   function clearDisplayContainerElem() {
      const element = displayContainerElem;
      while (element.firstChild) {
         element.removeChild(element.firstChild);
      }
   }

   /**
    * If the total number of rounds as not yet been reached continue playing
    * Otherwise Display the Final Score and Give the user the option to Play Again!
    */

   function determineWhatHappensNext() {
      // Remove Images
      clearDisplayContainerElem();
      const element = displayContainerElem;
      while (element.firstChild) {
         element.removeChild(element.firstChild);
      }

      if (currentNumberOfRounds !== total_numberof_rounds) {
         playGame();
         return;
      }

      // Hide current messages
      hideMessages();
      displayContainerElem.classList.remove("yourmove");

      const playerFinalScore = parseInt(playerScoreElem.innerText);
      const computerFinalScore = parseInt(computerScoreElem.innerText);

      // As described in https://www.w3schools.com/jsref/met_document_createelement.asp 
      // Create a DIV Element
      const newDiv = document.createElement("div");

      // Create element for the final results message
      const theMessage = document.createElement("h2");
      theMessage.innerText = playerFinalScore === computerFinalScore ? displayResultMessage(playerTies) :
         playerFinalScore > computerFinalScore ? displayResultMessage(playerWon) :
            displayResultMessage(playerLost);
      // Add styling
      theMessage.classList.add("final-score-message");

      // Add the message to the newly created div
      newDiv.appendChild(theMessage);

      // Add the button to the newly created div
      newDiv.appendChild(playAgainButton);

      // Display the result on the webpage
      displayContainerElem.appendChild(newDiv);

      // Enable the Rules button
      document.getElementById("the-rules-button").disabled = false;
   }

   /**
    * Display resultant message with optional name
    */

   function displayResultMessage(result) {
      let text = "";

      if (result === playerTies) {
         if (playerName) {
            text = playerName + "! "
         }

         return text + "It's a draw!"
      }

      if (result === playerWon) {
         if (!playerName) {
            return "Well done, You Win!";
         }

         return `Well done ${playerName}! You Win!`;
      }

      // Player loses
      if (playerName) {
         text = " " + playerName;
      }

      return `You lose${text}! I'm the Winner!`;
   }

   /**
    * Clear the final score messages from the screen
    * Reset all scoring variables
    */

   function resetInOrderToPlayAgain() {
      clearDisplayContainerElem();
      currentNumberOfRounds = 0;
      currentRoundNumberElem.innerText = "0";
      numberOfTiesElem.innerText = "0";
      playerScoreElem.innerText = "0";
      computerScoreElem.innerText = "0";
      if (random_chosen) {
         // Generate a new random number
         total_numberof_rounds = Math.floor(Math.random() * 15 + 1);
         numberOfRoundsElem.innerText = String(total_numberof_rounds);
      }
   }

}

/**
  * Disable the other buttons so that there is no user interruption
  */

function disableButtons() {
   document.getElementById("the-rules-button").disabled = true;

   const buttonsList = document.getElementsByClassName("weapon-button");

   for (let button of buttonsList) {
      button.disabled = true;
      button.style.opacity = "0.6";
      button.style.cursor = "not-allowed";
   }
}

/**
 * Enable the other buttons to allow user interaction
*/

function enableButtons() {
   document.getElementById("the-rules-button").disabled = false;

   const buttonsList = document.getElementsByClassName("weapon-button");

   for (let button of buttonsList) {
      button.disabled = false;
      button.style.opacity = "1";
      button.style.cursor = "pointer";

   }
}

// Taken from https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/ 
function titleCase(str) {
   return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
   }).join(' ');
}

function create_your_move() {
   const newDiv = document.createElement("div");
   newDiv.innerText = "Your Move!";
   newDiv.innerHTML = `<i class="fas fa-hand-point-up"></i><br>YOUR MOVE!`;
   newDiv.innerHTML = `<div><i class="fa-solid fa-hand-pointer"></i><p>YOUR</p><p>MOVE!</p>`;
   // Add styling
   newDiv.classList.add("circle");
   return newDiv;
}
