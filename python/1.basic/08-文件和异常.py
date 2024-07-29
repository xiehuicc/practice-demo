import time


def main():
    f = None
    try:
      f = open('致橡树.txt', 'r', encoding='utf-8')
      print(f.read())
    except FileNotFoundError:
      print("File not found")
    except LookupError:
      print("指定了未知编码")
    except UnicodeEncodeError:
      print("读取文件时解码错误")
    finally:
      if f:
        f.close()
    
    # 一次性读取整个文件,通过with关键字指定文件对象的上下文环境并在离开上下文环境时自动释放文件资源
    with open('致橡树.txt', 'r', encoding='utf-8') as f:
        print(f.read())


def read():
   
    # 通过for-in循环逐行读取
    with open('致橡树.txt', mode='r') as f:
        for line in f:
            print(line, end='')
            time.sleep(0.5)
    print()

    # 读取文件按行读取到列表中
    with open('致橡树.txt') as f:
        lines = f.readlines()
    print(lines)


def readBinary():
   try:
      with open('../image/ball.png','rb') as fs1:
        data = fs1.read()
        print(type(data))
   except FileNotFoundError:
      print("not found file")
   except IOError:
      print("读写文件时错误")
   print("程序执行结束")

if __name__ == '__main__':
    main()
    readBinary()
    # read()