# 応用問題 (p.30)

A, B = map(int, input().split())
Number_list = [1, 2, 4, 5, 10, 20, 25, 50, 100]

for N in Number_list:
  if A <= N <= B:
     print("Yes")
     break:
else:
  print("No")
