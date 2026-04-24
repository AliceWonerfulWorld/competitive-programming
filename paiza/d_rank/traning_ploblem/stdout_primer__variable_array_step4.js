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
    let items = lines[1].split(' ').map(Number);
    for (let i = 0; i < N; i++) {
        let row = [];
        for (let j = 0; j < items[i]; j++) {
            row.push(j);
        }

        console.log(row.join(' '));
    }
});