from module1 import foo
if __name__ == "__main__":
    # 除非直接运行该模块才会执行
    print("moudle 3 is excute")
    foo()
else:
     print("moudle3 this part not excute, import module name is :",__name__)