const obj = {
    _name: 'why',
    set name(value) {
        this._name = value
    },
    get name() {
        return this._name
    }
}

const objProxy = new Proxy(obj, {
    get: function(target, key,receiver) {
        // receiver是创建出来的代理对象 receiver === objProxy 为true， 改变obj中this的指向
        console.log('get方法被访问---')
        console.log(receiver === objProxy)
        return Reflect.get(target, key,receiver)
    },
    set: function(target,value,key,receiver) {
        console.log('set方法被访问---')
        Reflect.set(target,key,value,receiver)
    }
})

objProxy.name = 'kobe'
// get方法调用两次，第一次和第二次均为 访问objProxy对象，如果没有设置receiver第二次将访问obj对象，这样没用通过Reflect的方式，不知道操作有没有成功。
console.log(objProxy.name)
