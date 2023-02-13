let randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

let randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

let randomDiceImage1 = `images/dice${randomNumber1}.png`;
let randomDiceImage2 = `images/dice${randomNumber2}.png`;

document.querySelector(".img1").setAttribute(`src`, randomDiceImage1);
document.querySelector(".img2").setAttribute(`src`, randomDiceImage2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}