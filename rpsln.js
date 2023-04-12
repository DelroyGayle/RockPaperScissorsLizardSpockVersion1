let theListOfImages = ["rock1_dwayne.png",
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


let imageIndex = 0;
const imagesPath = "assets/images/";
const imageElem = document.getElementById("koolAIChoiceImage");

// https://developer.mozilla.org/en-US/docs/Web/API/setInterval

// variable to store our intervalID
let nIntervId = setInterval(showImage, 5000);

function showImage() {
    try {
//      console.log(imageIndex, theListOfImages.length)
        if (imageIndex === theListOfImages.length) {
            clearInterval(nIntervId);
            throw ("ALL DONE");
        }
    }
    catch (err) {
        alert("ALL DONE")
        return;
    }
    
    // All images use an objectFit of 'cover'. 
    // The exceptions are lizard1 & scissors3 are which use 'fill'
    imageElem.src = imagesPath + theListOfImages[imageIndex];
    imageElem.style.objectFit = theListOfImages[imageIndex].startsWith("lizard1") ||
        theListOfImages[imageIndex].startsWith("scissors3") ? "fill" : "cover";
    imageIndex++;
}
