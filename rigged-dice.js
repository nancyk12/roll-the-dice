const prompt = require('prompt-sync')({sigint: true});

let userPrompt = Number(prompt("Please choose a number between 1 and 6.  "));


if(userPrompt === 6) {
    console.log(Math.ceil(Math.random()* 6)+1);
} else if(userPrompt === 5) {
    console.log(Math.ceil(Math.random()*5)+1);
}else if(userPrompt === 4) {
    console.log(Math.ceil(Math.random()*4)+1);
}else if(userPrompt === 3) {
    console.log(Math.ceil(Math.random()*3)+1);
}else if(userPrompt === 2) {
    console.log(Math.ceil(Math.random()*2)+1);
}else if(userPrompt === 1) {
    console.log(Math.ceil(Math.random()*1)+1);
}else if(userPrompt === 5) {
    console.log(Math.ceil(Math.random()*5)+1);
}else if(userPrompt === 1) {
    console.log(Math.ceil(Math.random()*1));


    //if(dicePrompt === 3 || dicePromt === 1 || dicePrompt === 4){

    }