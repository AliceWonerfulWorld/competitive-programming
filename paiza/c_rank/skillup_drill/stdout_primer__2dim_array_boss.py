# 【n * n の 2 次元配列の表示】N * N の九九表の出力 Python3編（paizaランク C 相当）
# https://paiza.jp/works/mondai/stdout_primer/stdout_primer__2dim_array_boss

# 【問題】
# 自然数 N が入力されます。N 行 N 列の九九表を出力してください。具体的には、出力の i 行 j 列目 (1 ≦ i, j ≦ N ) の数値は i * j になるように出力してください。
# ただし、数値の間には半角スペースを、各行の末尾には、半角スペースの代わりに改行を入れてください。

N = int(input())

for i in range(1, N + 1):
   for j in range(1, N + 1):
    if j < N:
        print(i * j, end = " ")
    else:
        print(i * j)
