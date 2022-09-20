const obj = {
    name: 'why',
    age: 12
}

// 创建一个新的代理对象
const objProxy = new Proxy(obj, {
    get: function(target,key,receiver) {
        console.log('set-------');
        return Reflect.get(target,key)
    },
    set: function(target,key,newValue) {
        console.log('get-------');
        // Reflect比之前操作 作用更丰富了，返回bool值，可以知道set有没有成功。
        return Reflect.set(target,key,newValue)
    }
})

objProxy.name = 'kobe'
console.log(objProxy.name);