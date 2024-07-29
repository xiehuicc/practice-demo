### @property装饰器
# 之前通过将属性命名为__开头,来暗示属性是受保护的，不建议外界直接访问
# 那么如果想访问属性，可以通过属性的getter（访问器）和setter（修改器）方法进行对应操作。

### __slots__魔法
# 限定自定义类型的对象只能绑定某些属性
class Person(object):
    
     # 限定Person对象只能绑定_name, _age和_gender属性
    __slots__ = ('_name', '_age', '_gender')
    def __init__(self, name, age):
        self._name = name
        self._age = age

    #访问器 getter
    @property
    def name(self):
        return self._name
    
    # 访问器 
    @property
    def age(self):
        return self._age
    
    # 修改器 setter
    @age.setter
    def age(self, age):
        self._age = age

    def play(self):
        if self._age <= 18:
            print("%s小于18" %self._name)
        else:
            print("%s 大于18" %self._name)

def main():
    person = Person('lili', 17)
    person.play()
    person.age = 22
    person.play()
    # person.name = 'John' # can't set attribute 'name'
    person._gender = 'male'
    # person._isgay = True # 'Person' object has no attribute '_isgay'

if __name__ == "__main__":
    main()