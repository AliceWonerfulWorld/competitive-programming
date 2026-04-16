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
  let n = lines[0];
  let m = lines[1];
  let group1 = n.split(" ");
  let group2 = m.split(" ");
  console.log(Number(group1[0]) + 1);
  console.log(Number(group1[1]) + 1);
  console.log(Number(group2[0]) + 1);
  console.log(Number(group2[1]) + 1);
});


// 2重ループで解くなら
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
    for (let i = 0; i < lines.length; i++) {
        const row = lines[i].split(" ");
        for (let j = 0; j < row.length; j++) {
            console.log(Number(row[j]) + 1);
        }
    }
});