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
    let a = lines[0];
    let parts = a.trim().split(" ");
    for (let i = 0; i < parts.length; i++) {
        let items = parts[i];
        if (isNaN(items)) {
            console.log(items);
        } else {
            console.log(Number(items) + 1);
        }
    }
});