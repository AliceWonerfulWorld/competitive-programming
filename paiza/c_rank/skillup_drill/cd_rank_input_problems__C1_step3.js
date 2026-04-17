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
        const row = lines[i].trim().split(" ");
        for (let j = 0; j < row.length; j++) {
            console.log(Number(row[j]) + 1);
        }

    }
});