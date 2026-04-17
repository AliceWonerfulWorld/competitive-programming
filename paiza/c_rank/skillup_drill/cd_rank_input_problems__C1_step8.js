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
    let firstline = lines[0].split(" ");
    let n = Number(firstline[0]);
    let m = Number(firstline[1]);
    console.log(n + 1);
    console.log(m + 1);
    console.log(lines[1]);
});