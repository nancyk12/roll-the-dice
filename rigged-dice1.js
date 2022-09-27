const prompt = require('prompt-sync')({sigint: true});

/*
we're working with a 6 sided die

rigged side: 6

1 = 1/7
2 = 1/7
3 = 1/7
4 = 1/7
5 = 1/7
6 = 2/7

roll a 7 sided die
1-6 die with 2 6s
7 is being treated as another 6
*/

let rigged = Number(prompt("Enter a side you would like rig between 1 and 6: "));

let roll = Math.ceil(Math.random()*7); //1-7

if(roll === 7){
    console.log(rigged);
} else {
    console.log(roll);
}