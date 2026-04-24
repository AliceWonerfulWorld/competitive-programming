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
    let A = lines[1].trim().split(' ');
    let B = lines[2].split(' ').map(Number);
    for (let count of B) {
        let segment = A.splice(0, count);
        console.log(segment.join(' '));
    }
});