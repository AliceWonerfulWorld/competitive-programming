process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require('readeline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', (line) => {
    lines.push(line);
});
reader.on('close', () => {
    let temperature = lines[0];
    let t = temperature.split(' ');
    let t1 = Number(t[0]);
    let t2 = Number(t[1]);
    if (t2 > t1) {
        console.log(`+${t2 - t1}`);
    } else if (t1 > t2) {
        console.log(t2-t1);
    } else {
        console.log("0");
    }
});