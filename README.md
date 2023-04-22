# Rock-Paper-Scissors-Lizard-Spock

## Rock Paper Scissors Lizard Spock Game

[Link to deployed site](https://delroygayle.github.io/RockPaperScissorsLizardSpock/)

Created for my Portfolio Project 2 for Code Institute Full Stack Diploma.

### Introduction
Rock-Paper-Scissors-Lizard-Spock is a fun game for both adults and children.
It is based upon the original centuries-old game of ***Rock-Paper-Scissors***
To quote [Wikipedia](https://en.wikipedia.org/wiki/Rock_paper_scissors)
> ***Rock-Paper-Scissors*** is an [intransitive](https://en.wikipedia.org/wiki/Intransitive_game) hand game], usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock" (a closed fist), "paper" (a flat hand), and "scissors" (a fist with the index finger and middle finger extended, forming a V). 

Therefore, this version of the game, ***Rock-Paper-Scissors-Lizard-Spock*** incorporates two new shapes namely Lizard and Spock.
<br>To quote [Wikipedia](https://en.wikipedia.org/wiki/Rock_paper_scissors)
> ***"rock paper scissors Spock lizard"***, invented by [Sam Kass and Karen Bryla](http://www.samkass.com/theories/RPSSL.html), which adds "Spock" and "lizard" to the standard three choices. "Spock" is signified with the Star Trek Vulcan salute, while "lizard" is shown by forming the hand into a sock-puppet-like mouth. Spock smashes scissors and vaporizes rock; he is poisoned by lizard and disproved by paper. Lizard poisons Spock and eats paper; it is crushed by rock and decapitated by scissors. This variant was mentioned in a [2005 article in The Times of London](https://web.archive.org/web/20100531231332/http://www.timesonline.co.uk/tol/comment/leading_article/article1080425.ece) and was later the subject of an [episode](https://en.wikipedia.org/wiki/List_of_The_Big_Bang_Theory_episodes#ep25) of the American sitcom **[The Big Bang Theory](https://en.wikipedia.org/wiki/The_Big_Bang_Theory)** in 2008.

### Videos
Here is a YouTube video whereby you can see [Sheldon](https://bigbangtheory.fandom.com/wiki/Sheldon_Cooper) and [Raj](https://bigbangtheory.fandom.com/wiki/Rajesh_Koothrappali) settle settle a dispute about what to watch on TV using this game.

* [The Big Bang Theory -- Rock, Paper, Scissors, Lizard, Spock](https://www.youtube.com/watch?v=iSHPVCBsnLw)

If you need to hear it again, in this video, the explanation is repeated twice (up to **1:14secs**):

* [Rock Paper Scissors Lizard Spock - Extended Cut ~ The Big Bang Theory](https://www.youtube.com/watch?v=x5Q6-wMx-K8)

### Kool A.I.

In this version of the game,  the player will challenge the computer which goes by the name of **Kool A.I.**
Each round, **Kool A.I.** will choose between two different strategies in an attempt to win.

# UX

## TARGET AUDIENCE:

* * *

This online game targets all ages 5+.

*   Children 5+
*   Adults

## User Goals

* The game should be fun.
* The game should work on all relevant devices, that is, desktops, tablets and mobiles.

## User Stories

* As a user I want the game to be easy to learn and easy to play.
* The user has five choices: rock, paper, scissors, lizard or Spock
* In each round, after the user has made their move, the computer opponent will respond with its own move.
* The game will keep the score and the number of rounds and display these figures accordingly.
* The user has the option to play again and again!

## How to Play

### The Form

![image](https://user-images.githubusercontent.com/91061592/233741670-e4ea1763-4ffc-4df1-b1fa-ef63df971676.png)


At the onset the user is presented with a form whereby the user can optionally enter their name.
Then the user chooses the number of rounds. The choice being:
* 15 (the default)
* 10
* 5 or 
* a random number between 1 and 15 inclusive.

Then the user presses ***Let's Go!*** to begin the game.

### The Game

![image](https://user-images.githubusercontent.com/91061592/233741911-1fdaacb7-213b-4a90-89b4-49aa65021568.png)

The user chooses to push one of the five buttons which corresponds to the weapon, ***Rock, Paper, Scissors, Lizard or Spock.*** 
Once the user makes their choice, the computer AKA ***Kool AI*** will respond with its choice of weapon.
An image depicting the user's choice is shown on the left; seconds later, an image of ***Kool AI***'s choice is then shown on the right.

The winner is then determined and a message is shown to explain why the user ***either won or lost that round.*** 
Then a point is given to the victor. 

In this round, ***Kool AI*** wins because its choice of **Spock** smashes the user's choice of **scissors**.

![image](https://user-images.githubusercontent.com/91061592/233742390-88efe33c-361f-487c-a1cc-15121097bd0e.png)

In the next round, both ***tie*** with their choice of **rock**

![image](https://user-images.githubusercontent.com/91061592/233742495-90d56ef1-3a05-47ee-9f39-9252ddfb5728.png)

In this round, the users wins because the user chose **rock** which crushes ***Kool AI***'s choice of **lizard**.

![image](https://user-images.githubusercontent.com/91061592/233742683-4d297670-ef76-4807-bb3f-979df5b36ce9.png)


The number of rounds, the number of wins by the user, the number of wins by ***Kool AI*** and the number of ties are shown at the top.

The game ends when either the user or the computer gets to the predetermined number of rounds. 

The user can the choose to play ***Kool AI*** again by clicking the ***Play Again!*** button.

At any time, the user can choose to read the rules by clicking the rules button at the bottom of the screen.

![image](https://user-images.githubusercontent.com/91061592/233743234-df002091-939d-4931-a602-0dadb7712633.png)


Please note: if the user had selected **random** for the number of rounds, then a **new** random number of rounds between 1 and 15 inclusive will be used for the next round.

## Design Choices

I came across Anna Peterson's [article](https://javascript.plainenglish.io/the-worlds-easiest-the-rock-themed-rock-paper-scissors-javascript-tutorial-ee99b7f83e69) titled **The World’s Easiest “The Rock” Themed Rock Paper Scissors JavaScript Tutorial**<br>with the caption <em>*If you’ve ever wanted Dwayne “The Rock” Johnson to teach you JavaScript, well, this isn’t your lucky day, but it is <strong>almost like</strong> your lucky day!</em><p>

I really liked her innovative approach so I have adapted the same approach.
That is, I looked for images and icons of which would depict each of the five weapons for the game.
For example :-
* For ***Rock***, Dwayne Johnson and Marvel Comics character, The Thing AKA Benjamin Jacob Grimm
* For ***Paper***, DC Comics Character Teen Titans [Paper](https://dc.fandom.com/wiki/Paper_(Teen_Titans_TV_Series))
* For ***Scissors***, Edgar Scissorhands and DC Comics Character Teen Titans [Scissors](https://dc.fandom.com/wiki/Scissors_(Teen_Titans_TV_Series))
* For ***Lizard***, Star Trek character Gorn and Marvel Comics character, The Lizard AKA Dr. Curtis "Curt" Connors
* For ***Spock***, actor Leonard Nimoy (1931-2015)

### Please note
Although I chose to use the same approach as shown by Peterson, nevertheless, besides using the ***defer tag*** has Peterson explains it and my usage of her CSS initialisations

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

**All the code in this project is mine!**

## Images

I choose to use three images of each weapon in order that for each round, the computer could randomly choose an image to depict both the user's choice of weapon and the computer's choice of weapon.
  
The fifteen images are as follows 

* Rock
* Paper
* Scissors
* Lizard
* Spock

### Images

I chose to use 3 images for each of the game's shapes
All the images are free for personal use in regards to their licensing.
I sourced the images as follows:

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
  
  ![image](https://user-images.githubusercontent.com/91061592/233750137-f612b761-9a2c-4ce4-a0c9-aba0f946474a.png)
  
  ![image](https://user-images.githubusercontent.com/91061592/233750300-e1d38e73-b84c-467a-8a31-dea5ada023f2.png)


## Wireframes
* To design the wireframes I used [balsamiq](https://balsamiq.com/wireframes/). 
The examples shown are between a mobile and desktop.
For **tablets** the look would be practically the same as the desktop view; just that the sizes of the images and fonts are reduced.

![image](https://user-images.githubusercontent.com/91061592/230883775-144a8510-b71f-454b-944f-75443fff62cd.png)

![image](https://user-images.githubusercontent.com/91061592/230883938-858ac076-67c4-4c9e-acd4-6fc2e7108e93.png)

![image](https://user-images.githubusercontent.com/91061592/230884081-1bac8ff4-f33e-4be7-a91a-8d79d6bbca60.png)

![image](https://user-images.githubusercontent.com/91061592/230884206-43f7356e-872f-4d91-b20e-0fad0421341c.png)

![image](https://user-images.githubusercontent.com/91061592/230884481-2b341545-e762-49e3-a944-e6aa6a6f8d86.png)

The wireframes above reflect my initial approach of this project however as I continued development there has been changes to the initial look as shown below.






#### Mobile 
* 

#### Tablet
* 

#### Desktop
* 

# The Game

# Features

## Header

Shows the user that they have entered a site to play the game Rock, Paper, Scissors.

## Form

The user can optionally enter their name and a choice of the number of rounds to play.
The default being 15.
<br>Then the user clicks the following button to begin playing the game.

## Game Area

This area is where the user plays the game. It shows the options of Paper, Rock and Scissors. After a move is made the computer will follow with its choice. Depending on the result a message will be displayed above which indicates a win, loss or draw.

## Score Board

This shows the standings between the player and the computer, it gets updated after every round.

## Rules

Here is the rules of the game if needed, shown to the player so they know what wins against what.


  ## Existing Features
  #### Header
    *
    
  #### The Choices
    * 
  #### The Results
    
  #### Footer
    * 

## Future Features

# Testing 

## Validations

* HTML

No errors found when running the code through the W3C validator.
https://validator.w3.org/nu/?doc

* CSS
No errors found when running the code through the Jigsaw validator.
https://jigsaw.w3.org/css-validator/validator?uri=

* JavaScript

No errors found when running the code through the Jshint validator.

* Lighthouse

### SAMPLE ERROR

![image](https://user-images.githubusercontent.com/91061592/232718879-9f92a57f-2a7d-4fd6-99b1-dd7d98b56efd.png)


## Bugs

 
***
# Technologies Used

## Languages
* [HTML](https://en.wikipedia.org/wiki/HTML5)
* [CSS](https://en.wikipedia.org/wiki/CSS)
* [JavaScript](https://en.wikipedia.org/wiki/JS)

## Libraries And Frameworks
* [Font Awesome](https://fontawesome.com/)
* [Google Fonts](https://fonts.google.com/)
*   [Compress Jpeg](https://compressjpeg.com/)
*   [Font Awesome](https://fontawesome.com/)
*   [Favicon](https://favicon.io/)

## Tools
* [GitHub](https://github.com/)
* [GitPod](https://www.gitpod.io/docs/configure/)
* [W3C HTML Validation service](https://validator.w3.org/)
* [W3C CSS Validation service](https://jigsaw.w3.org/css-validator/)

***

## Features To Be Implemented
  
***
# Deployment
This project was deployed using GitHub using the following method:

1. Open the correct repository.
2. Select settings in the menu.
3. Click on the pages section in the side menu.
4. Go down to Branch and select main in the dropdown.
5. Save the changes and wait for a link that should appear at the top of the screen under GitHub Pages. Letting you know that the page is live. (If nothing has happened after a few minutes refresh the page and the link should appear.)

***

### GitHub Page

This site was deployed to GitHub pages using the following steps:

1. Go to the GitHub repository
2. Clock on the Settings tab
3. Go to GitHub Pages Section
4. From the source dropdown menu select Main branch
5. Once this has been selected, provide the link to the completed website

[Link to deployed site](https://delroygayle.github.io/RockPaperScissorsLizardSpock/)

* * *

## Credits
* The concept of using images for each weapons that I used was based on Anna Peterson's novel approach as shown in her article [The World’s Easiest “The Rock” Themed Rock Paper Scissors JavaScript Tutorial](https://javascript.plainenglish.io/the-worlds-easiest-the-rock-themed-rock-paper-scissors-javascript-tutorial-ee99b7f83e69)

## Acknowledgements
* 
