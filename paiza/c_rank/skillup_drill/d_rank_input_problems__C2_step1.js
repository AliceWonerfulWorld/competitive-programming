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
    let secondline = lines[1].split(" ");
    console.log(Number(lines[0]) + 1);
    for (let i = 0; i < secondline.length; i++) {
        console.log(Number(secondline[i]) + 1);
    }
});