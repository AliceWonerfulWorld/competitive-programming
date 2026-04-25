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
    let box = [];
    for (let i = 1; i <= N; i++) {
        let word = lines[i].trim();
        let index = box.indexOf(word)
        if (index !== -1) {
            box.splice(index, 1);
        }

        box.unshift(word);
    }
    
    for (let count of box) {
        console.log(count);
    }
});