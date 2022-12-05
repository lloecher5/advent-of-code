const fs = require('fs');
const data = fs.readFileSync('day03.txt', { encoding: 'utf-8' }).split('\r\n');

const commonLetters = [];
for (let i = 0; i < data.length; i++) {
    const firstComponent = data[i].slice(0, Math.floor(data[i].length / 2));
    const secondComponent = data[i].slice(Math.floor(data[i].length / 2));

    for (let letter of firstComponent) {
        if (secondComponent.includes(letter)) {
            commonLetters.push(letter);
            break;
        }
    }
}

const priorityAssignments = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52,
};

let sum = 0;

for (letter of commonLetters) {
    if (priorityAssignments[letter]) {
        sum += priorityAssignments[letter];
    }
}

console.log(sum);

//part 2

let sumTwo = 0;
const badges = [];

for (let i = 0; i < data.length; i += 3) {
    const rucksackOne = data[i];
    const rucksackTwo = data[i + 1];
    const rucksackThree = data[i + 2];

    for (letter of rucksackOne) {
        if (rucksackTwo.includes(letter) && rucksackThree.includes(letter)) {
            badges.push(letter);
            break;
        }
    }
}

for (letter of badges) {
    if (priorityAssignments[letter]) {
        sumTwo += priorityAssignments[letter];
    }
}

console.log(sumTwo);
