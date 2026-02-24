# ネオン街のクラブ（paizaランク：C相当）


# 【問題】
# ネオン街のクラブには英数字の形を模したクッキーが売られていました。
# クッキーは紙の箱に入っており、外からは中身を見ることができません。
# あなたは一つの箱に何種類の英数字が入っているか気になり、購入して調べてみることにしました。
# クッキーの数と一列に並べたクッキーの形が文字列として与えられます。
#クッキーの形が何種類あるか出力してください。

N = int(input())
S = input()

cookie_list = []
count = 0

for blackbox in S:
   if blackbox not in cookie_list:
      count += 1
      cookie_list.append(blackbox)

print(count)