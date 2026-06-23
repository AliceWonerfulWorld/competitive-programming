// 1.現在のカウント数を覚えておく「変数(データを入れる箱)」を作る
let current_count = 0;
// 2.HTMLの中の「数字を表示する場所」をJavaScriptに連れてくる (取得する)
const count_element = document.getElementById("count");
// 3.HTMLの中の「プラスボタン」と「マイナスボタン」をJavaScriptに連れてくる。
const minus_button = document.getElementById("minus-btn");
const plus_button = document.getElementById("plus-btn");
// 4. ボタンがクリックされた時の「イベント(処理)」を設定する
//    - プラスが押されたら : 変数を+1して、画面の数字を書き換える
plus_button.addEventListener("click", () => {
    current_count += 1;
    count_element.textContent = current_count;
})
//    - マイナスが押されたら : 変数を-1して、画面の数字を置き換える
minus_button.addEventListener("click", () => {
    current_count -= 1;
    count_element.textContent = current_count;
});