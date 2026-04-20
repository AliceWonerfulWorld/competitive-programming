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
    let M = Number(lines[1]);

    let line1 = [];
    for (let i = 1; i <= N; i++) {
        line1.push(i);
    }
    console.log(line1.join(' '));

    let line2 = [];
    for (let k = 1; k <= M; k++) {
        line2.push(k);
    }
    console.log(line2.join(' '));
});