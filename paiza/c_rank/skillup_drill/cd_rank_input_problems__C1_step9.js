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
    for (let i = 0; i < firstline.length; i++) {
        let items = firstline[i];
        console.log(Number(items) + 1);
    }
    console.log(lines[1]);
});