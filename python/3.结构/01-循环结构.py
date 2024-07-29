# 用for循环实现1~100求和

sum = 0
for x in range(1, 101):
    sum = x + sum
print(sum)

# 用for循环实现1~100 之间偶数相加
sum = 0
for x in range(1,101,2):
    sum = x + sum
print(sum)