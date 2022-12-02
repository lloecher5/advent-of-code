const fs = require('fs');
const data = fs.readFileSync('day01.txt', { encoding: 'utf-8' }).split('\r\n');

//puzzle 1
let sum = 0;
let maxSum = 0;

const elfCalories = {};

for (let i = 0; i < data.length; i++) {
    if (data[i].length > 0) {
        sum += Number(data[i]);
        elfCalories[`elf${i}`] = sum;
    } else {
        if (sum > maxSum) {
            maxSum = sum;
        }
        sum = 0;
    }
}

console.log(maxSum);

//puzzle 2

const elfCaloriesSorted = Object.values(elfCalories).sort((a, b) => a - b);

let sumOfHighestThree = 0;
for (let i = 0; i < elfCaloriesSorted.slice(-3).length; i++) {
    sumOfHighestThree += elfCaloriesSorted.slice(-3)[i];
}

console.log(sumOfHighestThree);
