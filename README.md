# MagicOrb

•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view.

•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•

### `npm test`

Launches the test runner in the interactive watch mode.\

•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•

## plan

• input question into text box
• question fades into the orb
• answer fades into view

•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•

## functioning code for answer generation

var userName = "Laila";
var userQuestion = "";
var randomNumber = Math.floor(Math.random()*8);
var eightBall = "";
var answer ="";

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
