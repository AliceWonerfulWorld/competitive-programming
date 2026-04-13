// 【早解3】うなりの周波数 JavaScript編（paizaランク D 相当）

// 周波数のわずかに異なる音が干渉すると、うなりが生じます。
// うなりの周波数は、2つの音の周波数のうち、大きい方から小さい方の周波数を引くことで計算できます。
// 2つの音の周波数が入力されるので、うなりの周波数を計算して出力してください。

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
  let t = lines[0];
  let s = t.split(' ');
  let indexone = Number(s[0]);
  let indextwo = Number(s[1]);

  if (indexone > indextwo) {
     console.log(indexone - indextwo);
  } else {
    console.log(indextwo - indexone);
  }
});