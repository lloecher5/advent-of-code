const fs = require('fs');
const data = fs.readFileSync('day07.txt', { encoding: 'utf-8' }).split('\r\n');
console.log(data);
