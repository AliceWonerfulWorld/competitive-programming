process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line',(line) => {
    lines.push(line);
});
reader.on('close',() => {
    let s = lines[0];
    let t = s.split(" ");
    let one = Number(t[0]);
    let two = Number(t[2]);
    console.log(one + two);
});