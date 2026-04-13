// 【早解2】正n角形の内角 JavaScript編

// 一般的に、n角形の内角の和は 180°×(n - 2) で求めることができます。
// nが入力として与えられるので、正n角形の1つの内角を計算して出力してください。

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
  let n = Number(lines[0]);
  let polygon_answer = 180 * (n - 2);
  let one_polygon = polygon_answer/n;
  let answer = Math.floor(one_polygon);
  console.log(answer);
});