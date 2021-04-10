var n = Math.random();
n = n * 6;
n = Math.round(n) + 1;
var diceimage = "dice" + n + ".png";
var randomimage = "images/" + diceimage;
document.querySelectorAll("img")[0].setAttribute("src", randomimage);
var n2 = Math.random();
n2 = n2 * 6;
n2 = Math.round(n2) + 1;
var diceimage2 = "images/dice" + n2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", diceimage2);
if (n > n2) {
    document.querySelector("h1").innerHTML = "Winner Player 1";
} else if (n2 > n) {
    document.querySelector("h1").innerHTML = "Winner Player 2";
} else
    document.querySelector("h1").innerHTML = "Draw";
