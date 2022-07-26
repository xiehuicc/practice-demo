// 一：默认绑定

// 二: 显示绑定

// 三: 隐式绑定
var obj = {
    name: 'obj',
    foo: function() {
        console.log(this);
    }
}

obj.foo()