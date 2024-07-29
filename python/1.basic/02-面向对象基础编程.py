class Student(object):
    # __init__是一个特殊方法用于在创建对象时进行初始化操作
    # 通过这个方法 为学生这个对象绑定name和age两个属性
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def study(self, course_name):
        print("%s正在学习%s." % (self.name, course_name))
    def watch_movie(self):
        if self.age < 18:
            print("%s只能观看《熊出没》." % self.name)
            print(self.__bar())
        else:
            print("%s正在观看《喜羊羊》" % self.name)
    # __为私有属性
    def __bar(self):
        print('__bar')

def main():
    stu1 = Student('james', 38)
    stu1.study('Python 程序设计')
    stu1.watch_movie()

    stu2 = Student('kobe', 17)
    stu2.study('体育')
    stu2.watch_movie()
    # 'Student' object has no attribute '__bar'
    # stu2.__bar()

    ## 它只是给私有的属性和方法换了一个名字来妨碍对它们的访问，
    # 事实上如果你知道更换名字的规则仍然可以访问到它们
    # 下面的代码就可以验证这一点
    stu2._Student__bar()

if __name__ == '__main__':
    main()