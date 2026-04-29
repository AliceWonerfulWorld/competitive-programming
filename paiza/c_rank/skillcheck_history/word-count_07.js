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
    const counts = new Map();
    for (let word of items) {
            counts.set(word, (counts.get(word) || 0) + 1);
    }

    for (let word of counts.keys()) {
        console.log(word);
    }

    for (let count of counts.values()){
        console.log(count);
    }
});