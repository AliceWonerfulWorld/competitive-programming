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
  const s = Number(lines[0]);

  const usSize = s - 18;
  const ukSize = s - 18.5;

  const usFormatted = usSize.toFixed(1);
  const ukFormatted = ukSize.toFixed(1);

  console.log(`${usFormatted} ${ukFormatted}`);
});