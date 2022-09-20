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
    },
    has: function(target,key,value) {
        console.log(`监听到对象的in操作`,target);
        return target[key]
    },
    deleteProperty: function(target,key,value) {
        console.log(`监听到对象的delete操作`,target);
        return target[key]
    }
})

console.log('name' in objProxy);

delete objProxy.age