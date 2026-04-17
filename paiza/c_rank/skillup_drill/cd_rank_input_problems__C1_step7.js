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
    for (let i = 0; i < lines.length; i++) {
        const items = lines[i];
        if (isNaN(items)) {
            console.log(items);
        } else {
            console.log(Number(items) + 1);
        }
    }
});