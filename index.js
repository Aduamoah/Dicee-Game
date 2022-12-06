var randomNumber1 = Math.random() * 6;
randomNumber1 = randomNumber1 + 1;
randomNumber1 = Math.floor(randomNumber1);
// console.log(randomNumber1);

var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImageSrc1 = "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImageSrc1);


var randomNumber2 = Math.random() * 6;
randomNumber2 = randomNumber2 + 1;
randomNumber2 = Math.floor(randomNumber2);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomDiceImageSrc2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImageSrc2);



// Checking for winning scenarios and outputting the necessary message.
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " 🚩 Player 1 Wins";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw 🤝"
}