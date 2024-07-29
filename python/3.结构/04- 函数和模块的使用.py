### 函数参数：
# Python中，函数的参数可以有默认值，也支持使用可变参数，所以Python并不需要像其他语言一样支持函数的重载

from random import randint

def roll_dice(n =2):
  """摇色子"""
  total = 0
  for _ in range(n):
    total += randint(1,6)
    return total
  
def add(a = 0, b = 0, c = 0):
  """三个数相加"""
  return a + b + c

# add函数更好的实现方案
def add(*args):
  total = 0
  for val in args:
    total += val
  return total


# 不指定参数，则使用默认值摇两颗色子
print(roll_dice())
# 摇三颗色子
print(roll_dice(3))

print(add())
print(add(1,2))
print(add(1,2,3))
# 传递参数时可以不按照设定的顺序进行传递, add(*args)时无法这样使用
# print(add(c= 1,b=3,a=2))

### 模块化管理函数
from module1 import foo
foo()
from module2 import foo
foo()

# 或 
import module1 as m1
m1.foo()

# __name__是Python中一个隐含的变量它代表了模块的名字
# 只有被Python解释器直接执行的模块的名字才是__main__
# 不希望引入该模块是执行的代码
import module3
print(__name__) # __main__
if __name__ == '__main__':
    # 除非直接运行该模块才会执行
    print('this module is excute!!!')
else:
  print("module_name:", __name__)
