

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
   newDiv.innerHTML = "<h1>An Internal Error Has Occurred:</p>"

   // Create element for the error message
   let errorMessage = document.createElement("h2");
   errorMessage.innerText = event.message;

   // add the message to the newly created div
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
   bodyElement.appendChild(newDiv)

});

function runTheGame() {

   /* Initialise Constants */

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

   // Us object-fit: fill; for these two images
   const fillImages = [8, 9];

   /* Give each handshape its own number and letter    
      N for Spock i.e. Leonard Simon Nimoy (March 26, 1931 – February 27, 2015)
   */

   const handshapes =
      [[0, "R", "Rock"],
      [1, "P", "Paper"],
      [2, "S", "Scissors"],
      [3, "L", "Lizard"],
      [4, "N", "Spock"]
      ];

   /* Using the above numbers - who beats who?
      e.g. 2 for Scissors, 3 for Lizard; therefore "23" means: Scissors decapitates Lizard
           4 for Spock, 0 for Rock; therefore "40" means: Spock vaporises Rock
   */
   const actions = {
      "21": "cuts",
      "10": "covers",
      "03": "crushes",
      "34": "poisons",
      "42": "smashes",
      "23": "decapitates",
      "31": "eats",
      "14": "disproves",
      "40": "vaporises",
      "02": "crushes"
   };

   // Location of images
   const imagesPath = "assets/images/";

   // Set up all the variables reflecting DOM elements 

   const displayContainerElem = document.getElementById("display-container");
   const numberOfRoundsElem = document.getElementById("number-of-rounds");
   const numberOfTiesElem = document.getElementById("number-of-ties");
   const playerScoreElem = document.getElementById("player-score");
   const computerScoreElem = document.getElementById("computer-score");
   const playerImageElem = document.getElementById("player-choice-image");
   const computerImageElem = document.getElementById("koolai-choice-image");
   const introElem = document.getElementById("intro");
   const outcomeElem = document.getElementById("outcome");
   const messageElem = document.getElementById("message");
   const playAgainElem = document.getElementById("play-again");

   // Initialise Variable
   let currentNumberOfRounds = 0;

   // Add Event Listeners to the buttons
   let buttonsList = document.getElementsByClassName("shape-button");

   for (i = 0; i < buttonsList.length; i++) {
      // EG for (i=0) shapeValues would be [0, 'R', 'Rock']
      const shapeValues = handshapes.find(element => element[0] === i);
      // Check for errors
      if (shapeValues === undefined) {
         const errorMessage = `Unknown button with this number: ${i}`;
         alert(errorMessage);
         throw `${errorMessage}. Aborting!`;
      }

      // In this event, Call 'showThisImage' with the corresponding 'shapeValues'
      // Then determine the computer opponent's response
      buttonsList[i].addEventListener("click", function () {
         showThisImage(shapeValues);
         const computerShapeValue = determineComputerChoice();
         showThisImage(computerShapeValue);

      });
   }

   document.getElementById("computer-score").addEventListener("submit", (event) => {
      event.preventDefault();
      // Handle submit. That is, remove the form and show the game layout
      document.getElementsByClassName("form-container")[0].style.display = "none";
      // DG4
      numberOfRoundsElem.innerText = String(3);
      document.getElementsByClassName("show-game")[0].style.display = "block";
      playGame();
   });

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
      console.log(currentNumberOfRounds)
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
    * imageInfo has the form [3, "L", "Lizard"]
    * So fetch the middle letter to determine type of image
    * Then pick a random number 0, 1 or 2
    * Add that to the corresponding base index in imageIndices
    * Retrieve the corresponding image and its alternate text
    * Then display the image
    */

   function showThisImage(imageInfo) {
      // Disable the other buttons so that there is no user interruption
      // disableButtons();
      const imageIndices = {
         R: 0, // Rock: 0 to 2
         P: 3, // Paper: 3 to 5
         S: 6, // Scissors: 6 to 8
         L: 9, // Lizard: 9 to 11
         N: 12, // Spock: 12 to 14
      }

      // imageInfo EG [3, "L", "Lizard"]
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
   function determineComputerChoice() {
      const thinkingMessage = document.createElement("p");
      thinkingMessage.innerText = "THINKING!";
      displayContainerElem.appendChild(thinkingMessage);

      /* DG      
            // For now, simply use a random number 0-4 inclusive
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

}