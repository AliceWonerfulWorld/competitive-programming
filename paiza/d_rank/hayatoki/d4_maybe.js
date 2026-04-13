// 【早解4】たぶん... JavaScript編（paizaランク D 相当）

// 自分に自信のない山田くんは、発言の最後に必ず「たぶん...」と言います。
// そんな山田くんの発言を、自信を持って断定する口調に変えてあげましょう。

process.stdin.resume();
process.stdin.setEncoding('utf8');

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
    let removeBack = s.slice(0 -8);
    console.log(removeBack + "!!");
});
