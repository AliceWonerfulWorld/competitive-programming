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
    // 集計用のメモ帳を用意する。
    const counts = new Map();
    // Map: key(単語)と数字(値)のペアで管理できる、辞書のようなもの。
    for (let word of items) {
        if (counts.has(word)) {
            counts.set(word, counts.get(word) + 1);
        } else {
            counts.set(word, 1);
        }
    }

    for (let [word, count] of counts) {
        console.log(`${word} ${count}`);
    }
});