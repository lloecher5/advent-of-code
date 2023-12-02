const fs = require('fs');
const data = fs.readFileSync('day10.txt', { encoding: 'utf-8' }).split('\r\n');

const cycles = [];
let sum = 1;
let cycleCount = 0;

for (let i = 0; i < data.length; i++) {
    if (isNaN(data[i][data[i].length - 1])) {
        cycleCount += 1;
        cycles.push({
            i: i,
            cycleCount: cycleCount,
            sum: sum,
        });
    } else {
        const num = +data[i].split(' ')[1];

        sum += num;
        cycleCount += 2;
        cycles.push({
            i: i,
            cycleCount: cycleCount,

            sum: sum,
        });
    }
}

console.log(cycles);
//console.log(cycles.slice(Math.floor(cycles.length / 2)));

//console.log(sum);
const signalStrengthAt20 = 21 * 20;
const signalStrengthAt60 = 19 * 60;
const signalStrengthAt100 = 20 * 100;
const signalStrengthAt140 = 62 * 140;
const signalStrengthAt180 = 61 * 180;
const signalStrengthAt220 = 57 * 220;

const totalSignalStrength =
    signalStrengthAt20 +
    signalStrengthAt60 +
    signalStrengthAt100 +
    signalStrengthAt140 +
    signalStrengthAt180 +
    signalStrengthAt220;

console.log(totalSignalStrength);
