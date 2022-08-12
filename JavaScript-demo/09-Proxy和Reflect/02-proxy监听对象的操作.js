const obj = {
    name: 'why',
    age: 12
}

// 创建一个新的代理对象
const objProxy = new Proxy(obj, {
    get: function(target,key) {
        console.log(`监听到对象的${key}属性被访问了`,target);
        return target[key]
    },
    set: function(target,key,newValue) {
        console.log(`监听到对象的${key}属性被设置值`,target);
        target[key] = newValue
    }
})

objProxy.name = 'kobe'
objProxy.age = 22
// 不做任何操作的话 会重写obj对象
console.log(objProxy)
console.log(obj)