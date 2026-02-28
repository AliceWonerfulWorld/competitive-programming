# 競技プログラミング学習記録

AtCoderとPaizaで学習した問題の解答コードを管理するリポジトリです。

## ディレクトリ構成

```
competitive-programming/
├─ atcoder/
│   ├─ abc/          # AtCoder Beginner Contest
│   ├─ arc/          # AtCoder Regular Contest
│   ├─ agc/          # AtCoder Grand Contest
│   └─ others/       # その他のコンテスト
└─ paiza/
    ├─ d_rank/       # Dランク問題
    ├─ c_rank/       # Cランク問題
    ├─ b_rank/       # Bランク問題
    ├─ a_rank/       # Aランク問題
    └─ s_rank/       # Sランク問題
```

## 使い方

### AtCoderの問題を追加する場合
```bash
cd atcoder/abc/abc350
# solution.pyに解答を記述
```

### Paizaの問題を追加する場合
```bash
cd paiza/c_rank
# 問題名.pyに解答を記述
```

## テンプレート

`template.py`に競技プログラミングでよく使う定型コードを用意しています。
新しい問題を解く際は、このテンプレートをコピーして使用してください。

## 学習記録

- 開始日: 2026年2月23日
- 目標: アルゴリズムとデータ構造の理解を深める


# 🐍 Paiza攻略 Python 汎用チートシート (D〜Sランク対応)

## 1. 標準入力（Paizaの最重要項目）
**【D・Cランクの基本】**
`python
# 文字列を1つ受け取る
S = input()

# 整数を1つ受け取る
N = int(input())

# 空白区切りの文字列を複数受け取る (例: A B C)
A, B, C = input().split()

# 空白区切りの整数を複数受け取る (例: 1 2 3)
A, B, C = map(int, input().split())

# 空白区切りの整数をリストとして受け取る (例: 1 2 3 4 5)
A = list(map(int, input().split()))
`

**【B・Aランクの複数行入力】**
`python
# N行の整数を受け取ってリストにする
N = int(input())
A = [int(input()) for _ in range(N)]

# N行の「空白区切りの整数」を受け取って2次元配列にする
N = int(input())
A = [list(map(int, input().split())) for _ in range(N)]
`

**【A・Sランクの高速入力（実行時間制限対策）】**
`python
import sys
# データ量が数十万件ある場合の入力（input()より高速）
input = sys.stdin.read
data = input().split()
`

## 2. 文字列操作（C・Bランクで頻出）
`python
S = "Paiza"

# スライス [開始:終了:ステップ]
S[1:4]   # "aiz" (インデックス1から3まで)
S[::-1]  # "aziaP" (文字列の反転)

# 検索とカウント
S.count("a")  # "a"の出現回数 (2)
S.find("z")   # "z"のインデックス (3)、見つからなければ -1

# 置換と結合
S.replace("a", "A")  # "PAizA"
",".join(["A", "B", "C"])  # "A,B,C" (リストを文字列に結合)

# 大文字・小文字
S.upper()  # "PAIZA"
S.lower()  # "paiza"
S.isupper() # すべて大文字か判定 (False)
`

## 3. 配列・リスト操作（Bランク以上で必須）
`python
A = [3, 1, 4, 1, 5, 9]

# 追加と削除
A.append(2)  # 末尾に追加
A.pop()      # 末尾を削除して取得

# ソート（並び替え）
A.sort()               # 昇順 [1, 1, 3, 4, 5, 9]
A.sort(reverse=True)   # 降順 [9, 5, 4, 3, 1, 1]

# 2次元配列のソート (例: 2番目の要素でソート)
B = [[1, 3], [2, 1], [3, 2]]
B.sort(key=lambda x: x[1])  # [[2, 1], [3, 2], [1, 3]]

# ⚠️注意: 2次元配列の初期化（参照渡しバグを防ぐ書き方）
H, W = 3, 4
grid = [[0] * W for _ in range(H)]  # 正解（[[0]*W]*H は絶対NG！）
`

## 4. 便利な標準ライブラリ（A・Sランクの強力な武器）
**【カウントと集計：`collections`】**
`python
from collections import Counter
A = [1, 2, 2, 3, 3, 3]
c = Counter(A)
print(c[3])  # 3 (要素「3」の出現回数)
`

**【キュー（待ち行列・BFSに必須）：`collections`】**
`python
from collections import deque
q = deque([1, 2, 3])
q.append(4)      # 右に追加
q.popleft()      # 左から取り出す (O(1)で超高速)
`

**【順列と組み合わせ：`itertools`】**
`python
import itertools
A = [1, 2, 3]
# 順列 (順番を考慮する)
list(itertools.permutations(A, 2))  # [(1, 2), (1, 3), (2, 1), (2, 3), (3, 1), (3, 2)]
# 組み合わせ (順番を考慮しない)
list(itertools.combinations(A, 2))  # [(1, 2), (1, 3), (2, 3)]
`

**【二分探索（Aランク以上で必須）：`bisect`】**
`python
import bisect
A = [1, 3, 5, 7, 9] # ソート済みの配列で使う
# 5を挿入すべきインデックスを高速で探す (O(log N))
idx = bisect.bisect_left(A, 5)  # 2
`

## 5. 知っておくと得するテクニック
`python
# 無限大（最小値を探す時の初期値に便利）
INF = float('inf')

# 三項演算子（1行でif-elseを書く）
ans = "Yes" if N % 2 == 0 else "No"

# 重複の削除、高速な検索には set（集合）を使う
A = [1, 2, 2, 3]
unique_A = set(A) # {1, 2, 3}
# setは「x in A」の検索がリストより圧倒的に速い(O(1))
`
