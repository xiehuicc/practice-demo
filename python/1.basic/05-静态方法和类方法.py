### 静态方法和类方法
# 例如：定义一个"三角形"类, 可以先写一个方法判断三条边是否构成三角形，这个方法显然不是对象方法；
# 因为在调用这个方法时，三角形对象尚未创建，所以这个方法是属于三角形类的并不是三角形对象的。可以用静态方法来解决这类问题

from math import sqrt

class Triangle(object):
    
    def __init__(self, a, b, c):
        self._a = a
        self._b = b
        self._c = c

    @staticmethod
    def is_valid(a, b, c):
        return a + b > c and b + c > a and a + c > b
    
    def perimeter(self):
        return self._a  + self._b + self._c
    
    def area(self):
        half = self.perimeter()/2
        return sqrt(half * (half - self._a) * (half - self._b) * (half - self._c))
    
def main():
    a = int(input("请输入第一条边:"))
    b = int(input("请输入第二条边:"))
    c = int(input("请输入第三条边:"))
    # a, b, c =3, 4, 5
    #
    if Triangle.is_valid(a, b, c):
        t = Triangle(a, b, c)
        print(t.perimeter())
        print(t.area())
    else:
        print("无法构成三角形!!!")

if __name__ == "__main__":
    main()