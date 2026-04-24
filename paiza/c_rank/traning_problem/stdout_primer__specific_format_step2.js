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
    let items = lines[0].trim().split(' ');
    let N = Number(items[0]);
    let box = [];
    for (let i = 0; i < N; i++) {
        box.push(`${items[1]}, ${items[2]}`);
    }
    console.log(box.join(', '));
});