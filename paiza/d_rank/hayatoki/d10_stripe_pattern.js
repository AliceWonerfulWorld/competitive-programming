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
    let t = Number(lines[0]);
    for (let i = 0; i < t; i++) {
        console.log("##########");
        console.log("..........");
    }
});