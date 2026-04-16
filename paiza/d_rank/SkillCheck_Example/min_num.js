process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  let n0 = Number(lines[0]);
  let n1 = Number(lines[1]);
  let n2 = Number(lines[2]);
  let n3 = Number(lines[3]);
  let n4 = Number(lines[4]);
  let Minvalue = Math.min(n0, n1, n2, n3, n4);
  console.log(Minvalue);
});


// 別解
// reader.on('close', () => {
//    const numbers = lines.map(Number);
//    const minValue = Math.min(...numbers);
//    console.log(minValue);
// });
//   