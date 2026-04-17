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
    console.log(Number(lines[0]) + 1);
    for (let i = 1; i < lines.length; i++) {
        let items = lines[i].split(" ");
        for (let j = 0; j < items.length; j++) {
            console.log(Number(items[j]) + 1);
        }
    }
});