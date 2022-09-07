// Dice Number 1 Function

let randomNumber1 = Math.floor((Math.random() * 6) + 1);
// randomNumber1 = randomNumber1 * 6;
// randomNumber1 = Math.floor(randomNumber1) + 1;
console.log(randomNumber1);

document.querySelector(".img1");
document.querySelector(".img1").attribute;
document.querySelector(".img1").getAttribute("src");

let shuffleOne = "images/dice" + randomNumber1 + ".png";
// console.log(shuffleOne);
let shuffleDiceOne = document.querySelector(".img1").setAttribute("src", shuffleOne);
// console.log(shuffleDiceOne);

// ------------------------------------------------------------
// Dice Number 2 Function

let randomNumber2 = Math.floor((Math.random() * 6) + 1);
console.log(randomNumber2);

document.querySelector(".img2");
document.querySelector(".img2").attribute;
document.querySelector(".img2").getAttribute("src");

let shuffleTwo = "images/dice" + randomNumber2 + ".png";
// console.log(shuffleTwo);
let shuffleDiceTwo = document.querySelector(".img2").setAttribute("src", shuffleTwo);
// console.log(shuffleDiceTwo);

// ------------------------------------------------------------
// Change The Title to Display a Winner

// function result() {
    if (randomNumber1 === randomNumber2){
        document.querySelector("h1").textContent = "Draw!";
    } else if (randomNumber1 > randomNumber2){
        document.querySelector("h1").textContent = "Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1){
        document.querySelector("h1").textContent = "Player 2 Wins!";
    }
// };

// result();

// ------------------------------------------------------------
