const fs = require('fs');
const data = fs
    .readFileSync('day06.txt', { encoding: 'utf-8' })
    .split('\r\n')[0];

for (let i = 0; i < data.length; i++) {
    const marker = [
        data[i],
        data[i + 1],
        data[i + 2],
        data[i + 3],
        data[i + 4],
        data[i + 5],
        data[i + 6],
        data[i + 7],
        data[i + 8],
        data[i + 9],
        data[i + 10],
        data[i + 11],
        data[i + 12],
        data[i + 13],
    ];
    const set = new Set(marker);

    if (set.size === 14) {
        console.log(i + 14);
        break;
    }
}
