// 解法1

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
    const scores = lines[0].split(" ").map(Number);

    const max = Math.max(...scores);
    const min = Math.min(...scores);

    const total = scores.reduce((sum, s) => sum + s, 0);

    console.log(total - (max + min));
});


// 解法2 
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
  const scores = lines[0].split(" ").map(Number);
  
  const max = Math.max(...scores);
  const min = Math.min(...scores);

  let total = 0;
  for (let i = 0; i < scores.length; i++) {
      total += Number(scores[i]);
  }

  console.log(total - (max + min));
});