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
    let f = Number(lines[0]);

    if (20 <= f && f <= 15000) {
        console.lo("yes");
    } else if (15000 < f && f <= 20000) {
        console.log("not sure");
    } else {
        console.log("no");
    }
});
