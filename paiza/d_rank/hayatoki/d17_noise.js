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
  let l = lines[0];

  if (l < 30) {
      console.log("quiet");
  } else if (l < 50) {
      console.log("normal");
  } else if (l < 70) {
      console.log("noisy");
  } else if (70 <= l) {
      console.log("very noisy");
  }
});