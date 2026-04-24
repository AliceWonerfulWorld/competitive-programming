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
  let H = Number(items[0]);
  let W = Number(items[1]);
  let A = items[2].padStart(9,' ');
  let B = items[3].padStart(9,' ');
  for (let i = 1; i <= H ; i++) {
      let box = [];
      for (let j = 1; j <= W; j++) {
          box.push(`(${A}, ${B})`);
      }
      let value = box.join(' | ');
      console.log(value);
      if (i < H) {
       console.log('='.repeat(value.length));
      }
  }
});