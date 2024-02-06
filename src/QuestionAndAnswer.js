function generateMagicResponse(userName, userQuestion) {

let randomNumber = Math.floor(Math.random()*8);
let answer = "";

// if (userName) {
//   console.log(`Hello, ${userName}!`);
// } else {
//   console.log("Hello!");
// }

if (randomNumber === 0) {
 answer = "it is certain";
} else if (randomNumber === 1) {
 answer = "it is decidedly so";
} else if (randomNumber === 2) {
 answer = "reply hazy try again";
} else if (randomNumber === 3) {
 answer = "cannot predict now";
} else if (randomNumber === 4) {
 answer = "do not count on it";
} else if (randomNumber === 5) {
 answer = "my sources say no";
} else if (randomNumber === 6) {
 answer = "outlook not so good";
} else if (randomNumber === 7) {
 answer = "signs point to yes";
}

console.log(`Magic Eight ball says ... ${answer}.`);

return answer;
}

export default generateMagicResponse;