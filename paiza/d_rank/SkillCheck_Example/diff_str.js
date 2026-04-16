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
   let a = lines[0];
   let b = lines[1];
   if (a === b) {
     console.log("OK");
   } else {
     console.log("NG");
   }
});