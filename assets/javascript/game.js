var computerNumber = [];
var wins = 0;
var losses = 0;
var counter = 0;
var crystalPics = ["./assets/images/yellowcrystal.png", "./assets/images/pinkcrystal.png", "./assets/images/bluecrystal.png", "./assets/images/purplecrystal.png"];

var computerNumberRandom = computerNumber[Math.floor(Math.random() * 25)] +1;
console.log(computerNumberRandom);

$("#number-to-guess").text(computerNumberRandom);

var crystalNumberOptions = [Math.floor(Math.random() * 8)] +1;
console.log(crystalNumberOptions);

for (i = 0; i < crystalNumberOptions.lenth; i++) {
    var crystalImage = $("<img>");
    crystalImage.attr("./assets/images/");
    crystalImage.attr("data-crystalvalue", crystalNumberOptions[i]);
    

}