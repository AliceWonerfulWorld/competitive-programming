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
  let thirdline = lines[2].split(" ");
  console.log(Number(firstline[0]) + 1);
  console.log(Number(firstline[1]) + 1);
  console.log(Number(lines[1]) + 1);
  for (let i = 0; i < thirdline.length; i++) {
      let items = thirdline[i];
      console.log(Number(items) + 1);
  }
});