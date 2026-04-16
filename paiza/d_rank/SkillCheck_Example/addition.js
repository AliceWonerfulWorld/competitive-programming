rocess.stdin.resume();
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
    let m = lines[0];
    let n = m.split(" ");
    let count1 = Number(n[0]);
    let count2 = Number(n[1]);
    console.log(count1 + count2);
});