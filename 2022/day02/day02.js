const fs = require('fs');
const data = fs.readFileSync('day02.txt', { encoding: 'utf-8' }).split('\r\n');

//puzzle 1

let score1 = 0;

for (let i = 0; i < data.length; i++) {
    //rock vs rock
    if (data[i][0] === 'A' && data[i][2] === 'X') {
        score1 += 4;
        //rock vs paper
    } else if (data[i][0] === 'A' && data[i][2] === 'Y') {
        score1 += 8;
        //rock vs scissors
    } else if (data[i][0] === 'A' && data[i][2] === 'Z') {
        score1 += 3;
        //paper vs rock
    } else if (data[i][0] === 'B' && data[i][2] === 'X') {
        score1 += 1;
        //paper vs paper
    } else if (data[i][0] === 'B' && data[i][2] === 'Y') {
        score1 += 5;
        //paper vs scissors
    } else if (data[i][0] === 'B' && data[i][2] === 'Z') {
        score1 += 9;
        //scissors vs rock
    } else if (data[i][0] === 'C' && data[i][2] === 'X') {
        score1 += 7;
        //scissors vs paper
    } else if (data[i][0] === 'C' && data[i][2] === 'Y') {
        score1 += 2;
        //scissors vs scissors
    } else if (data[i][0] === 'C' && data[i][2] === 'Z') {
        score1 += 6;
    }
}

console.log(score1);

//puzzle 2
let score2 = 0;

for (let i = 0; i < data.length; i++) {
    //rock vs scissors
    if (data[i][0] === 'A' && data[i][2] === 'X') {
        score2 += 3;
        //rock vs rock
    } else if (data[i][0] === 'A' && data[i][2] === 'Y') {
        score2 += 4;
        //rock vs paper
    } else if (data[i][0] === 'A' && data[i][2] === 'Z') {
        score2 += 8;
        //paper vs rock
    } else if (data[i][0] === 'B' && data[i][2] === 'X') {
        score2 += 1;
        //paper vs paper
    } else if (data[i][0] === 'B' && data[i][2] === 'Y') {
        score2 += 5;
        //paper vs scissors
    } else if (data[i][0] === 'B' && data[i][2] === 'Z') {
        score2 += 9;
        //scissors vs paper
    } else if (data[i][0] === 'C' && data[i][2] === 'X') {
        score2 += 2;
        //scissors vs scissors
    } else if (data[i][0] === 'C' && data[i][2] === 'Y') {
        score2 += 6;
        //scissors vs rock
    } else if (data[i][0] === 'C' && data[i][2] === 'Z') {
        score2 += 7;
    }
}

console.log(score2);
