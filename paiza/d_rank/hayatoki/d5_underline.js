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
reader.on('close',() => {
 let s = lines[0];
 let t = s.length;
 let count = "";
 for (let i = 0; i < t; i++) {
    count += "^";
 }
  console.log(s);
  console.log(count);
})
