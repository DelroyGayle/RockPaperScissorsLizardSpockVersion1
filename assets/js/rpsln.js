/* jshint esversion: 11 */
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

   // Number of weapons
   const numberOfWeapons = 5;
   // Produced a range reflecting the number of weapons starting from 0 i.e. [0, 1, 2, 3, 4]
   // As shown at https://www.freecodecamp.org/news/javascript-range-create-an-array-of-numbers-with-the-from-method/ 
   const weaponNumbersArray = Array.from({ length: numberOfWeapons}, (_, index) => index);

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
   const outcomeElem = document.getElementById("outcome");
   const explanationElem = document.getElementById("explanation");

   // Setup and Initialise Variables
   let playerName = null;
   let currentNumberOfRounds = 0;
   let total_numberof_rounds;
   let random_chosen = false;
   let game_area_showing = false;
   let computerWeaponOfChoice;
   let previousPlayerChoice;
   let previousComputerChoice;
   // For Strategy 2, assume a Tie to begin with
   let previousOutcome = playerTies; 
   // Randomly choose either STRATEGY 1 or STRATEGY 2
   let chosenStrategy = Math.floor(Math.random() * 2) + 1;

   /* For STRATEGY 1
      Since there are five weapons, start of with the scenario that
      the chances for each of the weapons being chosen are evenly distributed.
      That is, each of the weapons has a weight of 1

      Fill the array with one's using example from 
      https://dmitripavlutin.com/javascript-fill-array/
   */
   let weaponWeights = Array(numberOfWeapons).fill(1);

   /* Regarding the Rules page */   
   let theRulesText = "";   
   // Set up the text regarding the rules of the game
   setupTheRulesText();

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

      // create a listener for the current value of 'weaponValues'
      let newListener = createListener(showThisImage,weaponValues);

      // In this event, Call 'showThisImage' with the corresponding 'weaponValues' to display the images
      // Then determine the computer opponent's response
      buttonsList[i].addEventListener("click", newListener);
   }

   // Initialise these two buttons
   document.getElementById("the-rules-button").addEventListener("click", showTheRulesPage);
   document.getElementById("the-ok-button").addEventListener("click", removeTheRulesPage);
   document.getElementById("the-ok-button").disabled = true;

   // Initial Form
   const initialForm = document.getElementById("initial-form-id");
   initialForm.addEventListener("submit", (event) => {
      event.preventDefault();
      // Fetch the relevant form info
      const myForm = document.getElementsByClassName("show-form")[0];
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

   // Hide messages
   function hideMessages() {
      outcomeElem.classList.add("hide-element");
      explanationElem.classList.add("hide-element");      
   }

   // Show YOUR MOVE!
   function showYourMoveIndicator() {
      displayContainerElem.appendChild(your_move_indicator);
   }   
   
   // Handle the RULES Page

   function setupTheRulesText() {

      const actions = [
         "21", "cuts",
         "10", "covers",
         "04", "crushes",
         "43", "poisons",
         "32", "smashes",
         "24", "decapitates",
         "41", "eats",
         "13", "disproves",
         "30", "vaporises",
         "02", "crushes"
      ];

      // | indicates a carriage return i.e. <br>
      theRulesText = "Kool A.I. is ready to play|Please choose your weapon by clicking either|";
      theRulesText += "Rock, Paper, Scissors, Lizard or Spock|Whoever wins gets a point|The rules are as follows:||";
      for (let i=0; i < actions.length; i+=2) {
            const twoDigits = actions[i];
            // e.g. 21 ==> 2 stands for Scissors; 1 stands for Paper;
            const weapon1 = twoDigits[0];
            const weapon2 = twoDigits[1];
            const verb = actions[i + 1];
            // Each item of 'hand_weapons' have the following format [0, "R", "Rock"]
            theRulesText += `${hand_weapons[+weapon1][2]} ${verb} ${hand_weapons[+weapon2][2]}|`;
      }                   
   }

   function clearThePage(rulesButton) {
      // Disable and remove the Rules button
      rulesButton.disabled = true;
      rulesButton.style.display = "none";
      // Remove everything from the screen
      // Either the Form page
      if (!game_area_showing) {
         document.getElementsByClassName("form-container")[0].style.display = "none";
      } else {
         // or the Game page
         document.getElementsByClassName("show-game")[0].style.display = "none";
      }
   }

   function determinePlayerName() {
      if (!game_area_showing) {
            // Showing the form - check if the player has inputted their name
            const myForm = document.getElementsByClassName("show-form")[0];
            const formPlayerName = myForm.player_name.value.trim();
            return (formPlayerName !== "") ? titleCase(formPlayerName) : "";
      }      

      // Otherwise playerName will hold the value of the Player's name if it was inputted
      return playerName ? playerName : "";
   }   

   /* Followed the tuturial at https://www.w3schools.com/howto/howto_js_typewriter.asp  
      in order to create this 'typewriter' effect
   */

   function typeTheRules(theText) {
      let i = 0;
      let speed = 50;
      const theRulesContainerId = document.getElementById("the-rules-container");
      typeWriter();
      
      function typeWriter() {
        if (i < theText.length) {
          const theChar = theText.charAt(i);
          // * is the indicator to Show the Conclusion and OK button
          if (theChar === "*") {
               concludeTheRulesText();
          } else {
               // | indicates a carriage return i.e. <br>
               theRulesContainerId.innerHTML += theChar !== "|" ? theChar : "<br>";
               theRulesContainerId.classList.add("rules-container");
          }
          i++;
          setTimeout(typeWriter, speed);
        }
      }

      function concludeTheRulesText() {
           // Show the Conclusion and OK button
           document.getElementsByClassName("video-container")[0].style.display = "block";
      }
   }

   function showTheRulesPage() {
      const rulesButton = document.getElementById("the-rules-button");
     // Remove everything from the screen
      clearThePage(rulesButton);
      // Enable the OK button
      document.getElementById("the-ok-button").disabled = false;
      // Show the page introduction
      document.getElementsByClassName("show-rules-page")[0].style.display = "block";
      // Add the Player's name if present
      let theText="Greetings";
      const thePlayerName = determinePlayerName();
      theText += thePlayerName ? " " + thePlayerName + "!|" : "!|";
      // * Indicates the conclusion whereby the video link and OK button is then displayed
      theText += theRulesText + "*";
      // Type out the Rules
      typeTheRules(theText);
   }

   function removeTheRulesPage() {
      // Remove the displayed page
      document.getElementsByClassName("show-rules-page")[0].style.display = "none";
      // Remove the Conclusion and OK button
      document.getElementsByClassName("video-container")[0].style.display = "none";      
      // Remove all the elements in 'the-rules-container'
      const element = document.getElementById("the-rules-container");
      while (element.firstChild) {
         element.removeChild(element.firstChild);
      }      
      // Disable the OK button
      document.getElementById("the-ok-button").disabled = true;
      // Show the Rules button
      document.getElementById("the-rules-button").style.display = "block";
      // Enable the Rules button
      document.getElementById("the-rules-button").disabled = false;
      // Show the original page
      // Either the Form page
      if (!game_area_showing) {
         document.getElementsByClassName("form-container")[0].style.display = "block";
      } else {
         // or the Game page
         document.getElementsByClassName("show-game")[0].style.display = "block";
      }
   }   

   function playGame() {
      game_area_showing = true;
      // Show YOUR MOVE!
      showYourMoveIndicator();
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
      };

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

      // Remove the last child from displayContainerElem if it is not an image i.e. a message or a <div>
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
    * 
    * For each of the five weapons, 'weaponValues' will have a different value
    * In order to add the current value of 'weaponValues' to a new addEventListener function
    * so that it can be added to its corresponding button currently being processed;
    * a new function needs to be created by the method of 'Closures'
    * The newly created function is then returned whereby addEventListener()
    * will be used to add it to the corresponding button
    */
   function createListener(showThisImage, weaponValues) {
      return function () {
         showThisImage(weaponValues);
         const computerWeaponValue = determineComputerChoice();
         showThisImage(computerWeaponValue);
         updateScoresThenDetermineNextAction(weaponValues, computerWeaponValue);
      };
   }

   // STRATEGY 1 - Weighted Random Number - see README.md for explanation

   function strategy1_determineWeightedComputerChoice() {
         const randomNumber = Math.random();
         const theTotal = weaponWeights.reduce((total, item) => total + item, 0);
         let sum = 0;
         for (let i = 0; i < weaponWeights.length - 1; i++)
         {
              sum = sum + weaponWeights[i] / theTotal;
              if (randomNumber < sum) {
                    return i;
              }
         }
         return weaponWeights.length - 1;
   }


   /* STRATEGY 2 - Use Game Theory - see README.md for further explanation
   
      Here's the winning strategy in the form of two heuristics:

      If you win using one element, for the next round, 
      go for whatever element your opponent just lost with in the current round.
 
      If you lose using one element, for the next round, 
      go for whatever was not called by either of the players in the current round.
   */

   function strategy2_game_theory() {
      if (previousOutcome === playerTies) {
         // Since it was a tie, return a random number 0-4 inclusive
               return Math.floor(Math.random() * 5);
      }

      if (previousOutcome === playerLost) {
         // go for whatever element your opponent just lost with
               return previousPlayerChoice;
      }

      // Computer lost therefore go for whatever was not called by either of the players
      const choicesArray = weaponNumbersArray.filter(element => element !== previousComputerChoice &&
                                                                element !== previousPlayerChoice);
      return choicesArray[Math.floor(Math.random() * choicesArray.length)];
  }

   /**
    * Determine the computer move and display the corresponding image
    */

   function determineComputerChoice() {
      computerWeaponOfChoice = chosenStrategy === 1 ? strategy1_determineWeightedComputerChoice() : strategy2_game_theory();
      
      return hand_weapons[computerWeaponOfChoice];
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
         previousOutcome = playerTies;
         return playerTies;
      }

      let diff = playerWeaponNumber - computerWeaponNumber;
      if (diff < 0) {
         diff += numberOfWeapons;
      }

      diff %= numberOfWeapons;

      if (diff % 2 !== 0) {
         // odd; player wins!
         incrementPlayerWins();
         previousOutcome = playerWon;
         return playerWon;
      } else {
         // even; computer wins!
         incrementComputerWins();
         nextStrategyMove();
         previousOutcome = playerLost;
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

   function nextStrategyMove() {
      if (chosenStrategy === 1) {
         // Update array in regards to Strategy 1
         weaponWeights[computerWeaponOfChoice]++;
         return;
      }
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
      previousPlayerChoice = playerWeaponValues[0];
      previousComputerChoice = computerWeaponValues[0];

      // Determine the correct verb
      const index = playerWeaponNumberChar + computerWeaponNumberChar;
      let verb = actions[index];
      if (!verb) {
      /*
            if null, swop the numbers around e.g. 
            "32" instead of "23" in order to fetch
            "smashes"
      */
            verb = actions[computerWeaponNumberChar + playerWeaponNumberChar];
            // Swop! In order to determine the right name of each weapon for the message
            [playerWeaponValues, computerWeaponValues] = [computerWeaponValues, playerWeaponValues];
      }

      explanationElem.innerText = `${playerWeaponValues[2]} ${verb} ${computerWeaponValues[2]}`;
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
      if (currentNumberOfRounds !== total_numberof_rounds) {
         playGame();
         return;
      }

      // Hide current messages
      hideMessages();

      const playerFinalScore = parseInt(playerScoreElem.innerText);
      const computerFinalScore = parseInt(computerScoreElem.innerText);

      // As described in https://www.w3schools.com/jsref/met_document_createelement.asp 
      // Create a DIV Element
      const newDiv = document.createElement("div");

      // Create element for the final results message
      const theMessage = document.createElement("h2");
      theMessage.innerHTML = playerFinalScore === computerFinalScore ? displayResultMessage(playerTies) :
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
            text = playerName + "! ";
         }

         return text + "It's a draw!";
      }

      if (result === playerWon) {
         if (!playerName) {
            return "Well done, You Win!";
         }

         return `Well done ${playerName}!<br>You Win!`;
      }

      // Player loses
      if (playerName) {
         return `You lose ${playerName}!<br>I'm the Winner!`;
      }

      return `You lose! I'm the Winner!`;
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
         total_numberof_rounds = Math.floor(Math.random() * 15) + 1;
         numberOfRoundsElem.innerText = String(total_numberof_rounds);
      }

      // For Strategy 1, reset array
      weaponWeights = Array(numberOfWeapons).fill(1);
      // For Strategy 2, assume a Tie to begin with
      previousOutcome = playerTies; 
      // Randomly choose a new strategy, either STRATEGY 1 or STRATEGY 2
      chosenStrategy = Math.floor(Math.random() * 2) + 1;
   }

}

/**
  * Disable the other buttons so that there is no user interruption
  */

function disableButtons() {
   const buttonId = document.getElementById("the-rules-button");
   buttonId.disabled = true;
   buttonId.style.opacity = "0.6";
   buttonId.style.cursor = "not-allowed";

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
   const buttonId = document.getElementById("the-rules-button");
   buttonId.disabled = false;
   buttonId.style.opacity = "1";
   buttonId.style.cursor = "pointer";

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
