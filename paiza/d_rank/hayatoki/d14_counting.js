process.stdin.resume();
process.stidin.setEncoding('utf8');

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
    for (let i = 0; i < 10; i++) {
        let Answer = (n * i) % 10;
        console.log(Answer);
    }
});
