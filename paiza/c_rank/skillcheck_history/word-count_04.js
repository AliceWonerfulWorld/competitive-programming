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
    let newarrays = [...new Set(items)];
    for (let i = 0; i < newarrays.length; i++) {
        console.log(newarrays[i]);
    }
});