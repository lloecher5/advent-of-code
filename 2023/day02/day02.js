const fs = require('fs');
const data = fs.readFileSync('day02.txt', { encoding: 'utf-8' }).split('\r\n');

const colors = ['red', 'green', 'blue', 'green'];

const cubeTracker = {};

//part 1
for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < data[i].split(';').length; j += 1) {
        for (let n = 0; n < colors.length; n += 1) {
            if (data[i].split(';')[j].includes(colors[n])) {
                if (!cubeTracker[i + 1]) {
                    cubeTracker[i + 1] = [
                        {
                            [colors[n]]:
                                data[i].split(';')[j][
                                    data[i].split(';')[j].indexOf(colors[n]) - 3
                                ] +
                                data[i].split(';')[j][
                                    data[i].split(';')[j].indexOf(colors[n]) - 2
                                ],
                        },
                    ];
                } else {
                    cubeTracker[i + 1].push({
                        [colors[n]]:
                            data[i].split(';')[j][
                                data[i].split(';')[j].indexOf(colors[n]) - 3
                            ] +
                            data[i].split(';')[j][
                                data[i].split(';')[j].indexOf(colors[n]) - 2
                            ],
                    });
                }
            }
        }
    }
}

let sumOne = 0;

Object.keys(cubeTracker).forEach(function (game) {
    let isPossible = true;
    for (let i = 0; i < cubeTracker[game].length; i += 1) {
        if (
            cubeTracker[game][i]['red'] &&
            Number(cubeTracker[game][i]['red']) > 12
        ) {
            isPossible = false;
        } else if (
            cubeTracker[game][i]['blue'] &&
            Number(cubeTracker[game][i]['blue']) > 14
        ) {
            isPossible = false;
        } else if (
            cubeTracker[game][i]['green'] &&
            Number(cubeTracker[game][i]['green']) > 13
        ) {
            isPossible = false;
        }
    }

    if (isPossible) {
        sumOne += +game;
    }
});



//part 2
for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < data[i].split(';').length; j += 1) {
        for (let n = 0; n < colors.length; n += 1) {
            if (data[i].split(';')[j].includes(colors[n])) {
                if (!cubeTracker[i + 1]) {
                    cubeTracker[i + 1] = [
                        {
                            [colors[n]]:
                                data[i].split(';')[j][
                                    data[i].split(';')[j].indexOf(colors[n]) - 3
                                ] +
                                data[i].split(';')[j][
                                    data[i].split(';')[j].indexOf(colors[n]) - 2
                                ],
                        },
                    ];
                } else {
                    cubeTracker[i + 1].push({
                        [colors[n]]:
                            data[i].split(';')[j][
                                data[i].split(';')[j].indexOf(colors[n]) - 3
                            ] +
                            data[i].split(';')[j][
                                data[i].split(';')[j].indexOf(colors[n]) - 2
                            ],
                    });
                }
            }
        }
    }
}

let sumTwo = 0;

Object.keys(cubeTracker).forEach(function (game) {
    let blueMax = 1;
    let redMax = 1;
    let greenMax = 1;
    for (let i = 0; i < cubeTracker[game].length; i += 1) {
        if (
            cubeTracker[game][i]['red'] &&
            Number(cubeTracker[game][i]['red']) > redMax
        ) {
            redMax = Number(cubeTracker[game][i]['red']);
        } else if (
            cubeTracker[game][i]['blue'] &&
            Number(cubeTracker[game][i]['blue']) > blueMax
        ) {
            blueMax = Number(cubeTracker[game][i]['blue']);
        } else if (
            cubeTracker[game][i]['green'] &&
            Number(cubeTracker[game][i]['green']) > greenMax
        ) {
            greenMax = Number(cubeTracker[game][i]['green']);
        }
    }

    sumTwo += greenMax * blueMax * redMax;
});

console.log(sum);
