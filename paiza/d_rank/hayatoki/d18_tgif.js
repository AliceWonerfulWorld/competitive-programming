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
    let s = lines[0];
    let group1 = ["Monday", "Tuesday", "Wednesday", "Thursday"];
    let group2 = ["Friday"];
    if (group1.includes(s)) {
        console.log(`Still ${s}`);
    } else if (group2.includes(s)) {
        console.log("TGIF");
    }
});