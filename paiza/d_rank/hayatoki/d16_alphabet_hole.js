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

    const group1 = ["C","E","F","G","H","I","J","K","L","M","N","S","T","U","V","W","X","Y","Z"];
    const group2 = ["A","D","O","P","Q","R"];
    const group3 = ["B"];

    if (group1.includes(s)) {
      console.log("0");
    } else if (group2.includes(s)){
      console.log("1");
    } else {
      console.log("2");
    }
});