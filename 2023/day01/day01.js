const fs = require('fs');
const data = fs.readFileSync('day01.txt', { encoding: 'utf-8' }).split('\r\n');

// Part 1
let sum = 0;
let lettersToNumberObj = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
};

//loop through each line of data
for (let i = 0; i < data.length; i += 1) {
    //set an array to store the numbers
    let nums = [];
    //loop through each character of a line of data
    for (let j = 0; j < data[i].length; j += 1) {
        //if the character is number, push it into the nums array
        if (!isNaN(Number(data[i][j]))) {
            nums.push(data[i][j]);
        }
    }

    // if there is only one number, add the same number together
    if (nums.length === 1) {
        sum += Number(nums[0] + nums[0]);
    } else {
        //add the first number and the last number
        sum += Number(nums[0] + nums[nums.length - 1]);
    }
}

//Part 2
for (let i = 0; i < data.length; i += 1) {
    //keep track of the indexes where tou find either a number or a word spelling out a number
    const indexes = [];
    //loop through each character in the line of data
    for (let j = 0; j < data[i].length; j += 1) {
        //if the char is a number, push the number into the array as well as its index
        if (!isNaN(Number(data[i][j]))) {
            const num = data[i][j];
            indexes.push({ [num]: j });
        }
    }

    const numsSpelledOut = Object.keys(lettersToNumberObj);

    //loop through each of the possible words that spell out numbers
    for (let x = 0; x < numsSpelledOut.length; x += 1) {
        //if the line of data includes a word spelling out a number, add that word as number and its index to array
        if (data[i].includes(numsSpelledOut[x])) {
            const word = numsSpelledOut[x];
            //we need to add both the first instance and last instance of the word if there are multiple
            indexes.push({
                [lettersToNumberObj[word]]: data[i].lastIndexOf(
                    numsSpelledOut[x]
                ),
            });
            indexes.push({
                [lettersToNumberObj[word]]: data[i].indexOf(numsSpelledOut[x]),
            });
        }
    }

    //calculate the first and last index and their respecitve numbers
    let maxIndex = 0;
    let lastNumber = '';
    let minIndex = data[i].length - 1;
    let firstNumber = '';
    for (let y = 0; y < indexes.length; y += 1) {
        if (indexes[y][Object.keys(indexes[y])[0]] >= maxIndex) {
            maxIndex = indexes[y][Object.keys(indexes[y])[0]];
            lastNumber = Object.keys(indexes[y])[0];
        }

        if (indexes[y][Object.keys(indexes[y])[0]] <= minIndex) {
            minIndex = indexes[y][Object.keys(indexes[y])[0]];
            firstNumber = Object.keys(indexes[y])[0];
        }
    }

    if (indexes.length === 1) {
        sum += Number(firstNumber + firstNumber);
    } else {
        sum += Number(firstNumber + lastNumber);
    }
}
