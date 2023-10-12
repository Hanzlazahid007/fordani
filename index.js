var randomnumber = Math.floor(Math.random() * 6 + 1);
var randomimg1 = "img/dice" + randomnumber + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomimg1);

var randomnumber = Math.floor(Math.random() * 6 + 1);
var randomimg2 = "img/dice" + randomnumber + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomimg2);
if (randomimg1 > randomimg2) {
    document.querySelector("h1").innerHTML = "PLAYER 1 WIN !";
} else if (randomimg1 < randomimg2) {
    document.querySelector("h1").innerHTML = "PLAYER 2 WIN !";
} else

{
    document.querySelector("h1").innerHTML = "Draw";
}