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
    for (let i = 1; i <= 9; i++) {
        let box = [];
        for (let j = 1; j <= 9; j++) {
            box.push(`${i*j}`.padStart(2, ' '));
        }
        let value = box.join(' | ');
        console.log(value);
        if (i < 9) {
            console.log('='.repeat(value.length));
        }
    }
});