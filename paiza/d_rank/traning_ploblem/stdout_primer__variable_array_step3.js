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
    const N = Number(lines[0]);
    let items = [];
    for (let i = 1; i <= N; i++) {
        items.push(i);
        console.log(items.join(' '));
    }

});