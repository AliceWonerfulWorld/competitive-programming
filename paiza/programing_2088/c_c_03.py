# 自然の残る公園（paizaランク：C相当）

# 【問題】
# 自然の残る公園にいくつかのビーコン反応があります。
# 現在地の座標 (y, x) から最も近いビーコンの反応の地点を目指すことにしました。
# N 個のビーコンが発信されている座標と現在の座標が与えられるので最も近いビーコンの番号を出力してください。

N,a,b = map(int, input().split())
min_dist = 10**10
ans_id = 0

for i in range(1, N + 1):
   x, y = map(int, input().split())
   dist = (x - a)**2 + (y - b)**2
   if dist < min_dist:
      min_dist = dist
      ans_id = i

print(ans_id)

