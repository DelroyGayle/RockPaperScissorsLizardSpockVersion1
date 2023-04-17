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

   /* Give each handshape its own number and letter    
      N for Spock i.e. Leonard Simon Nimoy (March 26, 1931 – February 27, 2015)

      NOTE: The numbering is significant
      The shapes must be numbered in this order 
      Rock-Paper-Scissors-Spock-Lizard   
      See README.md and http://docmadhattan.fieldofscience.com/2015/02/rock-paper-scissors-lizard-spock.html 
      for details
   */

   const handshapes =
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
   Rock Papers Scissors Lizard Spock
   values as shown in 'handshapes'
*/   
   const buttonOrderArray = [0,1,2,4,3];

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
   const playerImageElem = document.getElementById("player-choice-image");
   const computerImageElem = document.getElementById("koolai-choice-image");
   const introElem = document.getElementById("intro");
   const outcomeElem = document.getElementById("outcome");
   const explanationElem = document.getElementById("explanation");
   const playAgainElem = document.getElementById("play-again");

   const LIMIT = 3; // DG

   // Initialise Variable
   let currentNumberOfRounds = 0;

   // Add Event Listeners to the buttons
   let buttonsList = document.getElementsByClassName("shape-button");

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
      const shapeValues = handshapes.find(element => element[0] === index);
      // Check for errors
      if (shapeValues === undefined) {
         const errorMessage = `Unknown button with this number: ${index}`;
         alert(errorMessage);
         throw `${errorMessage}. Aborting!`;
      }

      // In this event, Call 'showThisImage' with the corresponding 'shapeValues' to display the images
      // Then determine the computer opponent's response
      buttonsList[i].addEventListener("click", function () {
         showThisImage(shapeValues);
         const computerShapeValue = determineComputerChoice();
         showThisImage(computerShapeValue);
         updateScoresThenDetermineNextAction(shapeValues, computerShapeValue);
      });
   }

   /*
   // DG
   document.getElementById("computer-score").addEventListener("submit", (event) => {
      event.preventDefault();
      // Handle submit. That is, remove the form and show the game layout
      document.getElementsByClassName("form-container")[0].style.display = "none";
      // DG4
      numberOfRoundsElem.innerText = String(3);
      document.getElementsByClassName("show-game")[0].style.display = "block";
      playGame();
   });
   */

   // Initial Form
   const initialForm = document.getElementById("initial-form-id");
   initialForm.addEventListener("submit", (event) => {
      event.preventDefault();
      // Handle submit. That is remove the form and show the game layout
      document.getElementsByClassName("form-container")[0].style.display = "none";
      numberOfRoundsElem.innerText = String(3);
      //document.getElementById("p1").innerHTML = "New text!";
      document.getElementsByClassName("show-game")[0].style.display = "block";
      playGame();
   });

   // Initialise Variables

   // DG1
   let imageIndex = 0;

   function playGame() {
      // DG5
      console.log(currentNumberOfRounds);
      // Enable game buttons
      enableButtons();
      // Hide messages
      outcomeElem.classList.add("hide-element");
      explanationElem.classList.add("hide-element");
      displayContainerElem.classList.add("yourmove");
   }

   /**
    * Disable the other buttons so that there is no user interruption
    */

   function disableButtons() {
      document.getElementById("the-rules-button").disabled = true;
      const buttonsList = document.getElementsByClassName("shape-button");

      for (let button of buttonsList) {
         button.disabled = true;
      }
   }

   /**
    * Enable the other buttons to allow user interaction
   */

   function enableButtons() {
      document.getElementById("the-rules-button").disabled = false;
      const buttonsList = document.getElementsByClassName("shape-button");

      for (let button of buttonsList) {
         button.disabled = false;
      }
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

            const randomNumber = Math.floor(Math.random() * 5);
            showThisImage(handshapes[randomNumber]);
      */
      return handshapes[Math.floor(Math.random() * 5)];

      /*
      DG6
      let finalAnswer = randomNumber1 * 3; // 0 3 6 9 or 12
      const theImage = document.createElement("img");
      theImage.src = imagesPath + theListOfImages[randomNumber];
      theImage.alt = theListOfAltText[randomNumber];
      // Use 'object-fit': cover except for two exceptions
      theImage.style.objectFit = fillImages.indexOf(randomNumber) < 0 ? "cover" : "fill";
      displayContainerElem.appendChild(theImage);
      */

   }

   /**
    * Determine the Winner/Loser
    * Update the scores
    * Update the number of rounds
    * Then determine the next action
    */

   function updateScoresThenDetermineNextAction(playerShapeValues, computerShapeValues) {
      // EG for Rock vs. Paper 
      // playerShapeValues => [0,R,Rock]
      // computerShapeValues ==> [1,P,Paper]
      const playerShapeNumber = playerShapeValues[0];
      const computerShapeNumber = computerShapeValues[0];
      const result = determineWhoWonThatRound(playerShapeNumber, computerShapeNumber);
      setupOutcomeMessage(playerShapeValues, computerShapeValues, result);
      incrementCurrentRoundNumber();
      // Make visible the relevant outcome messages
      outcomeElem.classList.remove("hide-element");
      explanationElem.classList.remove("hide-element");
      // Pause for a few seconds then move on
      setTimeout(determineWhatHappensNext, delayBetweenPlay);
   }

   /**
    * 
    * EG for Rock vs. Paper 
    * playerShapeNumber => 0 
    * computerShapeNumber => 1
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

   function determineWhoWonThatRound(playerShapeNumber, computerShapeNumber) {
      if (playerShapeNumber === computerShapeNumber) {
         // Tie!
         incrementTies();
         return playerTies;
      }

      let diff = playerShapeNumber - computerShapeNumber;
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

   function setupOutcomeMessage(playerShapeValues, computerShapeValues, result) {
      // EG for Rock vs. Paper 
      // playerShapeValues => [0,R,Rock]
      // computerShapeValues ==> [1,P,Paper]

      if (result === playerTies) {
         outcomeElem.innerText = "Tie!";
         explanationElem.innerText = "";
         return;
      }

      const playerShapeNumberChar = String(playerShapeValues[0]);
      const computerShapeNumberChar = String(computerShapeValues[0]);

      // Determine the correct verb
      const index = playerShapeNumberChar + computerShapeNumberChar;
      let verb = actions[index];
      if (verb) {
         explanationElem.innerText = `${playerShapeValues[2]} ${verb} ${computerShapeValues[2]}`;
      } else {
      /*
         if null, swop the numbers around e.g. 
         "32" instead of "23" in order to fetch
         "smashes"
      */
         verb = actions[computerShapeNumberChar + playerShapeNumberChar];
         // Swop! In order to determine the right name of each shape for the message
         [playerShapeValues, computerShapeValues] = [computerShapeValues, playerShapeValues];
         explanationElem.innerText = `${playerShapeValues[2]} ${verb} ${computerShapeValues[2]}`;
      }
      outcomeElem.innerText = result === playerWon ? "You Win!" : "You Lose!";
   }

   function determineWhatHappensNext() {
      console.log("WWW",currentNumberOfRounds,LIMIT); // DG
      if (currentNumberOfRounds === LIMIT) {
         throw "DONE";
      }
      
      // Remove Images
         const element = displayContainerElem;
         while (element.firstChild) {
               element.removeChild(element.firstChild);
         }
      playGame();
   }

}