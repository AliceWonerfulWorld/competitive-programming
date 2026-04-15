process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', (line) => {
    lines.push(line);
});
reader.on('close', () => {
    let n = Number(lines[0]);
    let capacity = n / 140 * 100;
    let Answer = Math.floor(capacity);
    console.log(`${Answer}%`);
})