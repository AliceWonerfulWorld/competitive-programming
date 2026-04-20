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
    let N = Number(lines[0]);
    let half = N/2;

    let line1 = [];
    for (let i = 1; i <= N/2; i++) {
        line1.push(i);
    }
    console.log(line1.join(' '));

    let line2 = [];
    for (let k = half + 1; k <= N; k++) {
        line2.push(k);
    }
    console.log(line2.join(' '));
});