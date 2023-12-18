let guess = prompt("I'm thinking of a color, it can be red, blue, or green. What color am I thinking of? ");
let answer = null;

let answers = ["red", "green", "blue"];
let index = Math.floor(Math.random() * answers.length);

let isAnAnswer = answers.includes(guess);
while (isAnAnswer == false) {
    guess = prompt("That is not one of the possible colors, guess a color from the list!");
    isAnAnswer = answers.includes(guess);
} 
if (guess == answers[index]) {
    answer = "You're right! I was thinking of " + answers[index];
} else {
    answer = guess + " was wrong, I was thinking of " + answers[index];
}
alert(answer);