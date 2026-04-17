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
reader.on('close',() => {
    let firstline = lines[0].split(" ");
    let secondline = lines[1].split(" ");
    for (let i = 0; i < firstline.length; i++) {
        console.log(Number(firstline[i]) + 1);
    }

    for (let j = 0; j < secondline.length; j++) {
        console.log(secondline[j]);
    }
});