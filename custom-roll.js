const prompt = require('prompt-sync')({sigint: true});

let userPrompt = Number(prompt("How many sides does the die have? "));
console.log(`Below is a random roll of the die with ${userPrompt} sides.`);
console.log(Math.ceil(Math.random()* userPrompt));

