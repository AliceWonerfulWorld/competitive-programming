// 【早解1】1日1万歩 JavaScript編（paizaランク D 相当）

// あなたは健康のために、1日1万歩を歩くことを目標にしました。
// 入力として、歩いた距離(km)と歩幅(cm)が与えられるので、
// 1万歩を歩いているかどうかを判定して結果を出力してください。


// 自分が書いたコード
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
  let t = s.split(' ');
  let unit = t[0] * 10**5;
  let step = unit/t[1];
  if (step >= 10000) {
      console.log('yes');
  } else {
      console.log('no');
  }
});


// AIが書いたコード
process.stdin.resume();
// 外(paizaのシステム)からデータが入ってくる「郵便受け」のこと。
// .resume()は、「一時停止を解除する = 再開する」という意味。
// このコードを書くことによって、「よし、今からデータ(手紙)を受け付けるぞ！」と郵便受けのシャッターを開けて、データの待ち受け状態にしている。
process.stdin.setEncoding('utf8');
// setEncoding()は、文字のエンコード(翻訳ルール)を設定する命令。
// 「送られてきた0と1のデータを、UTF-8というルールに従って『普通の文字』に翻訳してね」とお願いしている。

var lines = [];

var reader = require('readline').createInterface({
// require('readline')は、Node.jsに最初から用意されている「テキストを1行ずつ(read line)読むための便利ツール」を呼び出す。
// .createInterface()は、その便利ツールを使って、実際の「受付担当者」をセッティングしている。
    input: process.stdin,
    // 入り口は。さっき開けた郵便受け(stdin)にしてね。
    output: process.stdout
    // 出口(出力先)は、画面への表示(stdout=スタンダート・アウトプット)にしてねという指示
    // 一行ずつ丁寧に読み取って仕分けしてくれる「受付係(reader)」を配置している。
});

reader.on('line', (line) => {
    lines.push(line);
});

reader.on('close', () => {
    let s = lines[0];
    let t = s.split(' ');
    
    // 1. kmをcmに直す (1km = 100,000cm)
    // 10**5 または 100,000を掛ける
    let distanceKm = Number(t[0]);
    let strideCm = Number(t[1]);

    let distanceCm = distanceKm * 100000;

    // 2. 歩数を計算する
    let stepCount = distanceCm / strideCm;

    // 3. 判定
    if (stepCount >= 10000) {
        console.log('yes');
    } else {
        console.log('no');
    }
});