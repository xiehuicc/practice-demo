import sys


score = [20, 40, 50, 60, 70, 80]
print(score[-1])
# 1,2,3
print(score[1:4])
print(score[1:])

thing = [90, "小黑", True]
print(thing)

### 列表的生成式和生成器
# 可以使用列表的生成式语法来创建列表：
f = [x for x in range(1,10)]
print(f)
f = [x + y for x in 'ABCD' for y in '1234567']
print(f)
# 用列表的生成表达式语法创建列表容器
# 用这种语法创建列表之后元素已经准备就绪所以需要耗费较多的内存空间
f = [x ** 2 for x in range(1,1000)]
print('size ::::',sys.getsizeof(f)) # 查看对象占用内存的字节数
# print(f)

# 通过yield 关键字将一个普通函数改造成生成函数
# 实现一个生成斐波拉切数列的生成器
def fib(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
        yield a

def main():
    for val in fib(20):
        print(val)

if __name__ == '__main__':
    main()