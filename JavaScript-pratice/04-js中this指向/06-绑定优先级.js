// 一：显示绑定 的优先级高于 隐式绑定

var obj = {
    name: 'obj',
    foo: function() {
        console.log(this);
    }
}

// 1.隐式绑定
obj.foo()   // obj

// 2. call/apply 的显示绑定高于隐式绑定
obj.foo.call('abc')     // abc

// 3. bind的显示绑定优先级高于 隐式绑定
var bar = obj.foo.bind('bcd')
bar() // bcd

// 二： new 绑定的优先级 高于 隐式绑定
// 如果打印出来的是obj对象，则隐式绑定的优先级高； 打印出来是 foo函数对象，则new优先级高
var f = new obj.foo()   // foo {}

// 三： new的优先级高于显示绑定，但new和apply/call 不能同时使用
function foo() {
    console.log('三：',this); // foo {}
}

var bar = foo.bind('abc')

var fn = new bar()