# 如何使用字串，字串的写法

# 函式 Function

phrase = "Hello \" Mr.White"
print(phrase)

print(phrase.lower())
print(phrase.upper())
print(phrase.isupper())
print(phrase.islower())

# python 中都是从0开始算
print(phrase[1])
#
print(phrase.index("e"))
# 所有H替换成h
print(phrase.replace("H", "h"))

s1 = r'\'hello, world!\''
s2 = r'\n\\hello, world!\\\n'
print(s1, s2, end=" ")

s3 = '\'hello, world!\''
s4 = '\n\\hello, world!\\\n'
print("\n")
print(s3, s4, end="")