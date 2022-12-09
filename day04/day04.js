const fs = require('fs');
const { networkInterfaces } = require('os');
const data = fs.readFileSync('day04.txt', { encoding: 'utf-8' }).split('\r\n');
//console.log(data.length);

let count = 0;

for (let i = 0; i < data.length; i++) {
    const arr = [];
    for (let char of data[i]) {
        if (char === '-') {
            continue;
        } else {
            arr.push(char);
        }
    }

    const newArr = arr.join('').split(',');

    for (let i = 0; i < newArr.length - 1; i++) {
        const firstFirst = Number(
            newArr[i].slice(0, Math.floor(newArr[i].length / 2))
        );

        const firstSecond = Number(
            newArr[i].slice(Math.floor(newArr[i].length / 2))
        );

        const secondFirst = Number(
            newArr[i + 1].slice(0, Math.floor(newArr[i + 1].length / 2))
        );
        const secondSecond = Number(
            newArr[i + 1].slice(Math.floor(newArr[i + 1].length / 2))
        );
        console.log(firstFirst, firstSecond, secondFirst, secondSecond);

        //part 1 logic
        // if (secondFirst >= firstFirst && secondSecond <= firstSecond) {
        //     console.log('yes');
        //     count++;
        // } else if (firstFirst >= secondFirst && firstSecond <= secondSecond) {
        //     console.log('yes');
        //     count++;
        // } else if (firstFirst <= secondFirst && firstSecond >= secondSecond) {
        //     console.log('yes');
        //     count++;
        // } else {
        //     console.log('no');
        // }

        //part 2 logic

        if (
            (firstSecond < secondFirst && firstFirst < secondFirst) ||
            (firstFirst > secondSecond && firstSecond > secondSecond) ||
            (secondFirst > firstSecond && secondSecond > firstSecond) ||
            (secondSecond < firstFirst && secondFirst < secondFirst)
        ) {
        } else {
            count++;
        }
    }
}

console.log(count);
