const fs = require('fs');
const data = fs.readFileSync('day05.txt', { encoding: 'utf-8' }).split('\r\n');

const crates = {
    1: ['R', 'N', 'F', 'V', 'L', 'J', 'S', 'M'],
    2: ['P', 'N', 'D', 'Z', 'F', 'J', 'W', 'H'],
    3: ['W', 'R', 'C', 'D', 'G'],
    4: ['N', 'B', 'S'],
    5: ['M', 'Z', 'W', 'P', 'C', 'B', 'F', 'N'],
    6: ['P', 'R', 'M', 'W'],
    7: ['R', 'T', 'N', 'G', 'L', 'S', 'W'],
    8: ['Q', 'T', 'H', 'F', 'N', 'B', 'V'],
    9: ['L', 'M', 'H', 'Z', 'N', 'F'],
};

for (let i = 0; i < data.length; i++) {
    const arr = data[i].split(' ').filter((element) => !isNaN(+element));

    //part 1
    // for (let i = 0; i < arr[0]; i++) {
    //     crates[arr[2]].push(crates[+arr[1]].pop());
    // }

    //part 2
    if (arr[0] === 1) {
        crates[arr[2]].push(crates[+arr[1]].pop());
    } else {
        const removedCrates = crates[arr[1]].splice(
            crates[arr[1]].length - arr[0],
            arr[0]
        );
        crates[arr[2]].push(...removedCrates);
    }
}

let answer = '';

for (let row in crates) {
    if (crates[row][crates[row].length - 1]) {
        answer += crates[row][crates[row].length - 1];
    }
}

console.log(answer);
