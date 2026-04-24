process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  let items = lines[0].trim().split(" ");
  let H = Number(items[0]);
  let W = Number(items[1]);
  for (let i = 1; i <= H; i++) {
    let vector = [];
    for (let j = 1; j <= W; j++) {
      vector.push(`(${items[2]}, ${items[3]})`);
    }
    let sum = vector.join(" | ");
    console.log(sum);
    if (i < H) {
      console.log("=".repeat(sum.length));
    }
  }
});
