const theListOfImages = ["rock1_dwayne.png",
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
/* Give each handshape its own number and letter    
   N for Spock i.e. Leobard Nimroy
*/

const handshapes = {0: ["R","Rock"], 1: ["P", "Paper"], 2: ["S", "Scissors"], 3: ["L", "Lizard"], 4: ["N", "Spock"]};

/* Using the above numbers - who beats who?
   e.g. 2 for Scissors, 3 for Lizard - Scissors decapitates Lizard
        4 for Spock, 0 for Rock - Spock vaporises Rock
*/
const actions = {"21": "cuts", 
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
let imageIndex = 0;
