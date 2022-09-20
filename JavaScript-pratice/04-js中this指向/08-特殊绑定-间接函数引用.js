var obj1 = {
    name: 'obj1',
    foo: function() {
        console.log(this);
    }
}

var obj2 = {
    name: 'obj2'
}

obj2.bar = obj1.foo
obj2.bar(); // this指向 obj2对象

// 这里有() 在进行词法解析时，不知道这行代码是换行的，所以前面要加分号（;）才能正常运行
// ()当作一个整体，()()相当于独立调用
(obj2.bar = obj1.foo)() // window
