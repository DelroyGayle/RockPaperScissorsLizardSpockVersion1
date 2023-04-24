# Rock-Paper-Scissors-Lizard-Spock

* * *
## Rock Paper Scissors Lizard Spock Game
Created for my Portfolio Project 2 for Code Institute Full Stack Diploma.<br>
[Link to deployed site](https://delroygayle.github.io/RockPaperScissorsLizardSpock/)<br><br>

![image](https://user-images.githubusercontent.com/91061592/233851131-602024a2-34f5-440f-918e-247c5fa10893.png)


### Introduction
Rock-Paper-Scissors-Lizard-Spock is a fun game for both adults and children.<br>
It is based upon the original centuries-old game of ***Rock-Paper-Scissors***.
<br><br>To quote [Wikipedia](https://en.wikipedia.org/wiki/Rock_paper_scissors)
> ***Rock-Paper-Scissors*** is an [intransitive](https://en.wikipedia.org/wiki/Intransitive_game) hand game, usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock" (a closed fist), "paper" (a flat hand), and "scissors" (a fist with the index finger and middle finger extended, forming a V). 

Therefore, this version of the game, ***Rock-Paper-Scissors-Lizard-Spock*** incorporates two new shapes namely Lizard and Spock.
<br>To quote [Wikipedia](https://en.wikipedia.org/wiki/Rock_paper_scissors)
>One popular five-weapon expansion is ***"rock paper scissors Spock lizard"***, invented by [Sam Kass and Karen Bryla](http://www.samkass.com/theories/RPSSL.html), which adds "Spock" and "lizard" to the standard three choices. "Spock" is signified with the Star Trek Vulcan salute, while "lizard" is shown by forming the hand into a sock-puppet-like mouth. Spock smashes scissors and vaporizes rock; he is poisoned by lizard and disproved by paper. Lizard poisons Spock and eats paper; it is crushed by rock and decapitated by scissors. This variant was mentioned in a [2005 article in The Times of London](https://web.archive.org/web/20100531231332/http://www.timesonline.co.uk/tol/comment/leading_article/article1080425.ece) and was later the subject of an [episode](https://en.wikipedia.org/wiki/List_of_The_Big_Bang_Theory_episodes#ep25) of the American sitcom **[The Big Bang Theory](https://en.wikipedia.org/wiki/The_Big_Bang_Theory)** in 2008.

### Videos
Here is a YouTube video whereby you can see [Sheldon](https://bigbangtheory.fandom.com/wiki/Sheldon_Cooper) and [Raj](https://bigbangtheory.fandom.com/wiki/Rajesh_Koothrappali) settle a dispute about what to watch on TV using this game.

* [The Big Bang Theory -- Rock, Paper, Scissors, Lizard, Spock](https://www.youtube.com/watch?v=iSHPVCBsnLw)

If you need to hear it again, in this video, the explanation is repeated twice (up to **1:14secs**):

* [Rock Paper Scissors Lizard Spock - Extended Cut ~ The Big Bang Theory](https://www.youtube.com/watch?v=x5Q6-wMx-K8)

### Your opponent: Kool A.I.

In this version of the game,  the player will challenge the computer which goes by the name of **Kool A.I.**
<br>Each round, **Kool A.I.** will choose between two different strategies in an attempt to win.

***
# UX
## Target Audience

This online game targets all ages 5+.

*   Children 5+
*   Adults

## User Goals

* The game should be fun.
* The game should work on all relevant devices, that is, desktops, tablets and mobiles.

## User Stories

* As a user I want the game to be easy to learn and easy to play.
* The user has five choices: Rock, Paper, Scissors, Lizard or Spock.
* In each round, after the user has made their move, the computer opponent will respond with its own move.
* The game will keep the score and the number of rounds and display these figures accordingly.
* The user has the option to play again and again!


## Wireframes
* To design the wireframes I used [balsamiq](https://balsamiq.com/wireframes/). 
The examples shown are between a mobile view and a desktop view.
For **tablets** the look would be practically the same as the desktop view; just that the sizes of the images and fonts are reduced.

* **Showing the User/Player beating the computer, namely, Kool A.I.**

![image](https://user-images.githubusercontent.com/91061592/230883775-144a8510-b71f-454b-944f-75443fff62cd.png)

* <strong>Showing a Tie.</strong>

![image](https://user-images.githubusercontent.com/91061592/230883938-858ac076-67c4-4c9e-acd4-6fc2e7108e93.png)

* <strong>Showing the end of the game whereby the User/Player has won.</strong>

![image](https://user-images.githubusercontent.com/91061592/230884081-1bac8ff4-f33e-4be7-a91a-8d79d6bbca60.png)

* <strong>Showing the end of the game whereby Kool A.I. has won.</strong>

![image](https://user-images.githubusercontent.com/91061592/230884206-43f7356e-872f-4d91-b20e-0fad0421341c.png)

* <strong>Showing the end of the game whereby it is a draw.</strong>

![image](https://user-images.githubusercontent.com/91061592/230884481-2b341545-e762-49e3-a944-e6aa6a6f8d86.png)

The wireframes above reflect my initial approach of this project however as I continued development there has been significant changes to the initial look as shown below.

***
## Design Choice

I came across Anna Peterson's [article](https://javascript.plainenglish.io/the-worlds-easiest-the-rock-themed-rock-paper-scissors-javascript-tutorial-ee99b7f83e69) titled **The World’s Easiest “The Rock” Themed Rock Paper Scissors JavaScript Tutorial**<br>with the caption <em>If you’ve ever wanted Dwayne “The Rock” Johnson to teach you JavaScript, well, this isn’t your lucky day, but it is <strong>almost like</strong> your lucky day!</em><p>

I really liked her innovative approach so I have adapted the same approach.
That is, I looked for images and icons which would depict each of the five weapons for the game.

  For example :-
* For ***Rock***, Dwayne Johnson and Marvel Comics character, The Thing AKA Benjamin Jacob Grimm
* For ***Paper***, DC Comics Character Teen Titans [Paper](https://dc.fandom.com/wiki/Paper_(Teen_Titans_TV_Series))
* For ***Scissors***, Edgar Scissorhands and DC Comics Character Teen Titans [Scissors](https://dc.fandom.com/wiki/Scissors_(Teen_Titans_TV_Series))
* For ***Lizard***, Star Trek character Gorn and Marvel Comics character, The Lizard AKA Dr. Curtis "Curt" Connors
* For ***Spock***, actor Leonard Nimoy (1931-2015)

### Please note
Although I chose to use the same approach as shown by Peterson, nevertheless, besides 
1. using the ***defer tag*** has Peterson explained and 
2. my usage of her CSS initialisations

```
* {
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  text-align: center;
  margin: 0 auto;
}

body {
  height: 100vh;
}

```

... **All the code in this project is mine!**

  
***
## How to Play

### The Form

At the onset the user is presented with a form whereby the user can **optionally** enter their name.<br>That is, it is not compulsory to enter one's name. It can be left blank.
<br>Then the user chooses the number of rounds. The choice being:
* 15 (the default)
* 10
* 5 or 
* a random number between 1 and 15 inclusive.

Then the user presses ***Let's Play!*** to begin the game.
  
![image](https://user-images.githubusercontent.com/91061592/233741670-e4ea1763-4ffc-4df1-b1fa-ef63df971676.png)

### The Game

The user is prompted by the **YOUR MOVE!** prompt to choose between the five buttons which correspond to the weapons,<br> ***Rock, Paper, Scissors, Lizard or Spock.*** 

![image](https://user-images.githubusercontent.com/91061592/233741911-1fdaacb7-213b-4a90-89b4-49aa65021568.png)

  
Once the user makes their choice, the computer AKA ***Kool AI*** will respond with its choice of weapon.<br>
An image depicting the user's weapon choice is shown on the left; seconds later, an image of ***Kool AI***'s weapon choice is then shown on the right.<br><br>

The winner of that round is then determined and a message is shown to explain why the user ***either won or lost that round.***<br> 
Then a point is given to the victor. 

#### Game Play Examples
  
* In this round, ***Kool AI*** won because of its choice of **Spock**. **Spock** smashes the user's choice of **scissors**.

![image](https://user-images.githubusercontent.com/91061592/233742390-88efe33c-361f-487c-a1cc-15121097bd0e.png)

* In this round, both the user and ***Kool AI*** tie because of their choice of **rock**.

![image](https://user-images.githubusercontent.com/91061592/233742495-90d56ef1-3a05-47ee-9f39-9252ddfb5728.png)

* In this round, the user wins because the user chose **rock**. **Rock** crushes ***Kool AI***'s choice of **lizard**.

![image](https://user-images.githubusercontent.com/91061592/233742683-4d297670-ef76-4807-bb3f-979df5b36ce9.png)

* The number of rounds, the number of wins by the user, the number of wins by ***Kool AI*** and the number of ties are shown at the top.<br>

* The game ends when either the user or the computer gets to the predetermined number of rounds.<br> 

* The user can then choose to play ***Kool AI*** again by clicking the ***Play Again!*** button.
  
 ![image](https://user-images.githubusercontent.com/91061592/233752898-d2bf2c07-8898-4db8-90fb-188594933d12.png)

* At any time, the user can choose to read the rules by clicking the rules button at the bottom of the screen.

![image](https://user-images.githubusercontent.com/91061592/233779989-9f0ae49f-2081-4491-88f1-091d3f0b6550.png)


Please note: if the user had selected **random** for the number of rounds, then a **new** random number of rounds between 1 and 15 inclusive will be used for the next round.

### Player's Name
  
What follows are screenshots of the same above scenarios. The difference being that the user had entered their name:<br>
  
* Please note: as one enters their name, the name is automatically converted to ***Title case***. That is, each separate word is capitalised whilst the rest of the letters are in lowercase. 
  
![image](https://user-images.githubusercontent.com/91061592/233777585-7137f0ff-2c9b-4dc6-958a-cb789dd31041.png)
  
* ***Title case*** is also used to display the player's name when the game begins.  
  
![image](https://user-images.githubusercontent.com/91061592/233778298-12188d27-8146-4a28-8ba2-a93f6848fb1f.png)
  
  
  
## Other Features
### Header
  
  ![image](https://user-images.githubusercontent.com/91061592/233777915-588db696-f4b6-4153-86be-14edc0d7f4b9.png)
  
### Score Board

This shows the standings between the player and the computer, it gets updated after every round.
  
![image](https://user-images.githubusercontent.com/91061592/233778054-d8be47cc-5e89-4e8b-bc77-1ea9fb935b13.png)
  
### Game Endings
  
* This shows what happens when the user wins.  

![image](https://user-images.githubusercontent.com/91061592/233779065-0541f808-89c9-4ea1-b40d-dd2d7e2e8285.png)
  
* This shows what happens when the user loses.
  
![image](https://user-images.githubusercontent.com/91061592/233778811-169d9d85-a95b-46ee-b50b-a25f968d83b8.png)
  
* This shows what happens when the game ends as a draw.
  
![image](https://user-images.githubusercontent.com/91061592/233778743-74c02ca8-b14f-4f9c-932f-b2bac452d4e7.png)

### Game Endings where the user had entered their name.

* This shows what happens when the user wins.  

  ![image](https://user-images.githubusercontent.com/91061592/233779155-2017a916-1300-4a5c-92c3-cf275e03b33e.png)
  
* This shows what happens when the user loses.
  
![image](https://user-images.githubusercontent.com/91061592/233778914-ea6dfba0-32df-4a4b-b5e4-bd188be74386.png) 
  
* This shows what happens when the game ends as a draw.

![image](https://user-images.githubusercontent.com/91061592/233778610-f9e7c604-c8e3-4d9b-bd9f-7421e46e9008.png)
  
  
### Rules

When the user clicks the **Rules Button** the following page is displayed.<br>
Kool A.I. actually ***types out*** the rules for the user to read!<br>

![image](https://user-images.githubusercontent.com/91061592/233870731-0a63117c-b32f-4ad4-bad2-723a400bdd3f.png)

The green link at the bottom will open up a YouTube video of [an episode of ***Big Bang Theory***](https://www.youtube.com/watch?v=iapcKVn7DdY) where Sheldon explains and demonstrates the game to Raj.

![image](https://user-images.githubusercontent.com/91061592/233870411-f2e90a23-f48c-47b6-abfa-d6baa91b0fd1.png)
  
## Images

I choose to use three images of each weapon in order that for each round, the computer could randomly choose an image to depict both the user's choice of weapon and the computer's choice of weapon.
  
The fifteen images are as follows: 

* **Rock**

1) rock1_dwayne.png - from [kindpng.com](https://www.kindpng.com/imgv/wixxh_image-the-rock-cutout-dwayne-johnson-transparent-background/)
  
  ![image](https://user-images.githubusercontent.com/91061592/233746875-65c0f2af-8f3f-4764-8231-de0cf916af01.png)

2) rock2_dwayne.png - from [kindpng.com](https://www.kindpng.com/imgv/miomxh_transparent-the-rock-png-wwf-the-rock-png/)
  
  ![image](https://user-images.githubusercontent.com/91061592/233746966-6bd13bf3-8e2b-43fc-ac7b-87bad0399d0d.png)

3) rock3_bengrimm_thething.webp - from [marvel.fandom.com](https://marvel.fandom.com/wiki/Benjamin_Grimm_(Earth-616))
  
  ![image](https://user-images.githubusercontent.com/91061592/233747033-c71e392a-f0b8-44ec-8614-2df8aed1e874.png)


* **Paper**

4) paper1.jpg - from [icon-library.com](https://icon-library.com/icon/rock-paper-scissors-icon-17.html)
  
  ![image](https://user-images.githubusercontent.com/91061592/233747081-cf359182-5d07-46bb-bc60-9a996d5a8580.png)

5) paper2_fadilah_unsplash.jpg from [unsplash.com](https://unsplash.com/photos/AnYg7fO8-m8) 
   Courtesy of [Fadilah Im](https://unsplash.com/ja/@imanitor?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  
  ![image](https://user-images.githubusercontent.com/91061592/233747146-5fe8f910-a084-42dd-af0f-a2b331254f89.png)

6) paper3_earth_teen_titans.webp - from [teentitans.fandom.com](https://teentitans.fandom.com/wiki/Rock,_Paper,_Scissors)
  
  ![image](https://user-images.githubusercontent.com/91061592/233747194-a8636e56-473d-441e-b788-f9a5126d7e49.png)


* **Scissors**

7) scissors1.png - from [kindpng.com](https://www.kindpng.com/imgv/ixhhmJ_transparent-beetlejuice-png-edward-mos-de-tesoura-png/)
  
  ![image](https://user-images.githubusercontent.com/91061592/233747335-5baf6957-7c1f-4edf-814b-00abb90ac280.png)

  
8) scissors2_daniil_onischenko_unsplash.jpg from [unsplash.com](https://unsplash.com/photos/q6Gwa3fOQ0I) 
   Courtesy of [Daniil Onischenko](https://unsplash.com/@flyvk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  
  ![image](https://user-images.githubusercontent.com/91061592/233747391-6981480d-7605-455a-ab56-e45d4c362726.png)

9) scissors3_earth_teen_titans.webp - from [teentitans.fandom.com](https://teentitans.fandom.com/wiki/Rock,_Paper,_Scissors)
  
  ![image](https://user-images.githubusercontent.com/91061592/233747444-6c7821c6-489d-44e9-b5cf-8e66377b2a1c.png)

       
* **Lizard**

10) lizard1_drconners.webp - from [marvel.fandom.com](https://marvel.fandom.com/wiki/Curtis_Connors_(Earth-616))
  
  ![image](https://user-images.githubusercontent.com/91061592/233747503-8e2cb0b7-9ac8-4fac-bb6c-c8260e658d4f.png)

11) lizard2_gorn.webp - from [memory-alpha.fandom.com](https://memory-alpha.fandom.com/wiki/Gorn)
  
  ![image](https://user-images.githubusercontent.com/91061592/233747546-c4823411-2a35-4806-a053-0fb724346ddb.png)

12) lizard3_gorn_arena.webp - from [memory-beta.fandom.com](https://memory-beta.fandom.com/wiki/Gorn)
  
  ![image](https://user-images.githubusercontent.com/91061592/233747608-66f559b8-167a-421c-a393-e07101aab62b.png)


* **Spock**

13) spock1.png - from [kindpng.com](https://www.kindpng.com/imgv/mmwJmi_spock-star-trek-png-transparent-png/)
  
  ![image](https://user-images.githubusercontent.com/91061592/233747729-cf59be27-edb3-4056-a282-b5189af70e23.png)

14) spock2.png - from [kindpng.com](https://www.kindpng.com/imgv/hJJoibT_spock-star-trek-clipart-hd-png-download/ )
  
  ![image](https://user-images.githubusercontent.com/91061592/233747810-38fe9e15-0722-4169-ad96-b95645d82c76.png)

15) spock3.png - from [kindpng.com](https://www.kindpng.com/imgv/iiwTbib_spock-png-page-mr-spock-transparent-png/)
  
  ![image](https://user-images.githubusercontent.com/91061592/233747877-fa5e9754-16be-42ed-aa3f-01664c14c1c5.png)


## Fonts

I went to Google Fonts for my choice of fonts. I decided to use **'Press Start 2P'** because I wanted the user to ***feel that they are playing against a computer.*** The font **'Press Start 2P'** in my opinion has that 80s computer game feel and look to it.

## Icon Buttons

For the buttons' choice of each weapon I spell out each weapon followed by ***an icon which depicts the hand shape***
  
  ![image](https://user-images.githubusercontent.com/91061592/233748441-ff004337-1004-43ec-996a-0321bfcd968e.png)
The icons I sourced from [fontawesome.com (version 5.15.4](https://fontawesome.com/v5/search).
So, the five buttons have the form as follows: 
  ```
  1. Rock <i class="fas fa-hand-rock"></i>
  2. Paper <i class="fas fa-hand-paper"></i>
  3. Scissors <i class="fas fa-hand-scissors"></i>
  4. Lizard <i class="fas fa-hand-lizard"></i>
  5. Spock <i class="fas fa-hand-spock"></i>
  ```
  
## Colours

* For the background I use a ***black*** linear-gradient(360deg, #1C1C1C 10%, #494949 360%) for the main background colour.
  
  ![image](https://user-images.githubusercontent.com/91061592/233749450-fb43792d-5eb3-4092-b683-f08df54cde14.png)

  I sourced that linear-gradient from [Hook Agency](https://hookagency.com/blog/ui-gradients/).
* The green colour **#8acc25** is used for the main font colour.
  
  ![image](https://user-images.githubusercontent.com/91061592/233749415-9946ea1a-740f-4bf0-8fdf-d29a04d471f7.png)
  
* The background colour of the weapon buttons is **#05aa6d**
  
  ![image](https://user-images.githubusercontent.com/91061592/233749541-b6dd2bf3-5088-4d3a-b083-7764f0149a8d.png)
  
  ![image](https://user-images.githubusercontent.com/91061592/233749622-8a52b0d1-ac62-47ae-b627-6986766528ee.png)
* The background colour of the **YOUR MOVE!** indicator is **#527a16**
  
  ![image](https://user-images.githubusercontent.com/91061592/233749828-ad7a6fe2-6565-48aa-a53d-f5bc8aec470e.png)
  
  ![image](https://user-images.githubusercontent.com/91061592/233749891-9b907a88-0a86-497d-b42d-e83946609050.png)

 * The background colour for the ***Let's Play!*** button, the ***Play Again!*** button and the ***Rules*** button is **#6725cc**
  
  ![image](https://user-images.githubusercontent.com/91061592/233750182-d5bf5a40-bf8e-42a1-9854-fec2fde1dadb.png)

  ![image](https://user-images.githubusercontent.com/91061592/233752898-d2bf2c07-8898-4db8-90fb-188594933d12.png)
  
  ![image](https://user-images.githubusercontent.com/91061592/233780013-52e486ab-3fca-485c-b1d1-d56b55182770.png)
  
  ![image](https://user-images.githubusercontent.com/91061592/233750300-e1d38e73-b84c-467a-8a31-dea5ada023f2.png)


## Testing 

### Validations

* HTML

No errors found when running the code through [the W3C validator](https://validator.w3.org/nu/#textarea).

* CSS
No errors found when running the code through [the Jigsaw validator](https://jigsaw.w3.org/css-validator/validator?uri=).


* JavaScript

No errors found when running the code through [the Jshint validator](https://jshint.com/).

### Lighthouse

![image](https://user-images.githubusercontent.com/91061592/233813832-f88f1f63-cd36-4963-af35-b44cbe6b4a60.png)


## Bugs

### Script kept on running even after throwing an error!

It was my understanding that if **an error is thrown and there is no catch** the error will be console.logged as ***Uncaught*** with a corresponding message.
After which the script would stop. However, this was not my experience whilst developing this game.<br>
That is, I had ***error-handling*** code in place in case of any errors. This code worked and indeed pointed out a logic error in my program.
The error handling code was as follows:

```
     if (!imageCharacter || imageIndices[imageCharacter] === undefined) {
         const errorMessage = `Unknown image info: ${imageInfo}`;
         alert(errorMessage);
         throw `${errorMessage}. Aborting!`;
      }
```
However although the error was indeed being shown in the console.log

![image](https://user-images.githubusercontent.com/91061592/233799369-0ecf85ec-e112-432e-abe3-4b90f3776543.png)

Yet my script kept on running expecting the player's next game move!<br>
It was my understanding that JavaScript was **meant to stop** when an error occurs!<br>

Whilst investigating the matter I came across [this quote](https://softwareengineering.stackexchange.com/questions/324992/unlike-c-why-does-uncaught-exception-in-javascript-not-terminate-the-script)

> An uncaught exception in a ***Javascript script <strong>does</strong> cause the script to be terminated***, but the browser executing the script **does not remember that it terminated abnormally.**

So in effect, that is what was happening with my script. The browser (in my case, Chrome) kept on executing the script therefore the game kept running expecting the player's next move!

### Solution: Window: error event

I looked at this [Window: error event information](https://developer.mozilla.org/en-US/docs/Web/API/Window/error_event) and thereby implemented an error handling routine:

```
window.addEventListener("error", (event) => {
   // Remove everything from the DOM's body
...
const newDiv = document.createElement("div");
   newDiv.innerHTML = "<h1>An Internal Error Has Occurred:</h1>";

   // Create element for the error message
   let errorMessage = document.createElement("h2");
   errorMessage.innerText = event.message;

   // Add the message to the newly created div
   newDiv.appendChild(errorMessage);
...
   // Display the error on the webpage
   bodyElement.appendChild(newDiv);

});

```

Now if any error occurs the entire webpage is cleared and a central error message is displayed.

### Sample Error Message

![image](https://user-images.githubusercontent.com/91061592/233800108-cacb73c1-de58-45ad-ba80-db0008992236.png)

***
## Jshint warnings

In order to remove warnings such as:<br>
* **'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6')**
* **'template literal syntax' is only available in ES6 (use 'esversion: 6')**
<br><br>Solution: I had to<br>
* Unclick ***New JavaScript features (ES6)***
* Then add <strong>/*jshint esversion: 6 */</strong> to the top of my script


Then I got the warning:<br>
* **'nullish coalescing' is only available in ES11 (use 'esversion: 11')**
<br><br>Solution: I had to<br>
* replace the /* jshint esversion: 6 */ comment with 
* <strong>/* jshint esversion: 11 */</strong>
 
***
## Jshint 'Confusing Semantics' warning

Jshint produced the following warning:<br>
**Functions declared within loops referencing an outer scoped variable may lead to confusing semantics.**<br>
***(showThisImage, determineComputerChoice, updateScoresThenDetermineNextAction)***<br><br>
Strictly speaking, this is ***a warning not an error!***
<br>Nevertheless I tried to remove it.
The warning was due to the following code:

```
      buttonsList[i].addEventListener("click", function () {
         showThisImage(weaponValues);
         const computerWeaponValue = determineComputerChoice();
         showThisImage(computerWeaponValue);
         updateScoresThenDetermineNextAction(weaponValues, computerWeaponValue);
      });
```


I tried using the editor 'Refactor' functionality 

```
      buttonsList[i].addEventListener("click", function () {
         addListenerToButton(showThisImage, weaponValues, determineComputerChoice, updateScoresThenDetermineNextAction);
      });


followed by

   function addListenerToButton(showThisImage, weaponValues, determineComputerChoice, updateScoresThenDetermineNextAction) {
            showThisImage(weaponValues);
            const computerWeaponValue = determineComputerChoice();
            showThisImage(computerWeaponValue);
            updateScoresThenDetermineNextAction(weaponValues, computerWeaponValue);
   }

```

This produced the same warning i.e.<br>
**Functions declared within loops referencing an outer scoped variable may lead to confusing semantics.**<br> 
***(addFunctionToButton, showThisImage, determineComputerChoice, updateScoresThenDetermineNextAction)***

### Solution: Use a Closure

I found the following example of a Closure solution in this article<br>
[JavaScript closure inside loops – simple practical example](https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example)

```
    const funcs = [];
    function createfunc(i) {
        return function() {
          console.log("My value: " + i);
        };
    }
    for (let i = 0; i < 3; i++) {
        funcs[i] = createfunc(i);
    }
```

Thus individual functions were being created with the ***closured current values of 'i'*** then placed in an array.<br>
I needed to do something similar with ***the current values of 'weaponValues'*** in my script.<br>
So that the resultant ***listener*** functions would thereby be added to each of the relevant five weapon-depicting buttons.<br>
The result I came up with was:

```

      let newListener = createListener(showThisImage,weaponValues);
      buttonsList[i].addEventListener("click", newListener);

      followed by

      function createListener(showThisImage, weaponValues) {
          return function () {
              showThisImage(weaponValues);
              const computerWeaponValue = determineComputerChoice();
              showThisImage(computerWeaponValue);
              updateScoresThenDetermineNextAction(weaponValues, computerWeaponValue);
          };
      }      
```

The above changes successfully removed the Jshint warning.

## Technologies Used

### Languages
* [HTML](https://en.wikipedia.org/wiki/HTML5)
* [CSS](https://en.wikipedia.org/wiki/CSS)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Libraries And Frameworks
* [Font Awesome](https://fontawesome.com/)
* [Google Fonts](https://fonts.google.com/)
* [TinyPNG](https://tinypng.com/)
* [Favicon](https://favicon.io/)
* [Stack Overflow](https://stackoverflow.com/)
* [W3 schools](https://www.w3schools.com)

### Tools
* [GitHub](https://github.com/)
* [GitPod](https://www.gitpod.io/docs/configure/)
* [W3C HTML Validation service](https://validator.w3.org/)
* [W3C CSS Validation service](https://jigsaw.w3.org/css-validator/)
* [JSHint, a JavaScript Code Quality Tool](https://jshint.com/)

***

## Future features
* Alongside the option to ***Play Again!***, add a Home button so that user can enter a new rounds selection or even another name
* Add sound effects that play when a move is made
  
***
## Deployment
This project was deployed using GitHub using the following method:

1. Open the correct repository.
2. Click on **Settings** in the menu.
3. Click on **Pages** in the side menu.
4. Go down to **Branch** under **Build and deployment** and select main in the dropdown.  
5. Save the changes. Then wait for a link that should appear at the top of the screen under GitHub Pages.<br>
The link would be worded as **Your site is live at https://***\<Your GitHub Name\>***.github.io\/***\<Repo Name\>***/** <br>followed by a
**Visit site** button.<br> 
(If nothing has happened after a few minutes then refresh the page and the link should appear.)<br><br>
  
[Link to deployed site](https://delroygayle.github.io/RockPaperScissorsLizardSpock/)

* * *

## Credits
The concept of using images for each weapon that I had used was based on Anna Peterson's novel approach as shown in her article<br> [The World’s Easiest “The Rock” Themed Rock Paper Scissors JavaScript Tutorial](https://javascript.plainenglish.io/the-worlds-easiest-the-rock-themed-rock-paper-scissors-javascript-tutorial-ee99b7f83e69)

## Acknowledgements
Many thanks to my mentor Derek McAuley for his technical expertise and guidance.
