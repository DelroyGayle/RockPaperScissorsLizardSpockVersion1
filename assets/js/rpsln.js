// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function () {
   runTheGame();
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
      "scissors3_earth_teen_titans.webp",
      "lizard1_drconners.webp",
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

   /* Give each handshape its own number and letter    
      N for Spock i.e. Leonard Simon Nimoy (March 26, 1931 – February 27, 2015)
   */

   const handshapes = [   [0, "R", "Rock"], 
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
   
   for (i=0; i < buttonsList.length; i++) {
      // EG for (i=0) shapeValues would be [0, 'R', 'Rock']
      let shapeValues = handshapes.find(element => element[0] === i);
      // Check for errors
      if (shapeValues === undefined) {
        const errorMessage = `Unknown button with this number: ${i}`;
        alert(errorMessage);	
        throw `${errorMessage}. Aborting!`;	
      }

      // In this event, Call 'showThisImage' with the corresponding 'shapeValues'
      buttonsList[i].addEventListener("click", function() {
           showThisImage(shapeValues)
       });
   }

   document.getElementById("computer-score").addEventListener("submit", (event) => {
      event.preventDefault();
      // Handle submit. That is, remove the form and show the game layout
      document.getElementsByClassName("form-container")[0].style.display="none";
      // DG4
      numberOfRoundsElem.innerText=String(3);
      document.getElementsByClassName("show-game")[0].style.display="block";
      playGame();
    });

   // Initial Form
   const initialForm = document.getElementById("initial-form-id");
   initialForm.addEventListener("submit", (event) => {
      event.preventDefault();
      // Handle submit. That is remove the form and show the game layout
      document.getElementsByClassName("form-container")[0].style.display="none";
      numberOfRoundsElem.innerText=String(3);
      //document.getElementById("p1").innerHTML = "New text!";
      document.getElementsByClassName("show-game")[0].style.display="block";
      playGame();
    });

   // Add event listeners
   // Initialise Variables

   // DG1
   let imageIndex = 0;

   function playGame() {
      // DG5
      console.log(currentNumberOfRounds)
      // displayContainerElem.innerHTML="Your Move!"
      // displayContainerElem.classList.add("flex-centred");
      displayContainerElem.classList.add("yourmove");
   }
}

function showThisImage(n) {
   console.log("IMAGE",n)
}