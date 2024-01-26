let userName = "Laila";
let userQuestion = "";
let randomNumber = Math.floor(Math.random()*8);
let eightBall = "";
let answer ="";

if (userName) {
  console.log(`Hello, ${userName}!`)
} else {
  console.log("Hello!")
}

if (randomNumber === 0) {
 answer = "It is certain";
} else if (randomNumber === 1) {
 answer = "It is decidedly so";
} else if (randomNumber === 2) {
 answer = "Reply hazy try again";
} else if (randomNumber === 3) {
 answer = "Cannot predict now";
} else if (randomNumber === 4) {
 answer = "Do not count on it";
} else if (randomNumber === 5) {
 answer = "My sources say no";
} else if (randomNumber === 6) {
 answer = "Outlook not so good";
} else if (randomNumber === 7) {
 answer = "Signs point to yes";
};

console.log(`Magic Eight ball says ... ${answer}.`)
