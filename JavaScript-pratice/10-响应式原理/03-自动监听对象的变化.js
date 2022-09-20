class Depend {
    constructor() {
        this.reactiveFns = []
    }
    addDepend(reactiveFns) {
        this.reactiveFns.push(reactiveFns)
    }
    notify() {
        this.reactiveFns.forEach(fn => {
            fn()
        })
    }
}

// 封装一个响应式函数
const depend = new Depend()
function watchFn(fn) {
    depend.addDepend(fn)
}

// 对象的响应式
const obj = {
    name: 'why', // 每一个属性都对应一个depend对象
    age: 18
}

// 自动监听对象属性变化
const proxyObj = new Proxy(obj, {
    get(target, key, receiver) {
        return Reflect.get(target, key, receiver)
    },
    set(target,key,newValue,receiver) {
        Reflect.set(target,key,newValue,receiver)
        depend.notify()
    }
})

function foo () {
    const newName = proxyObj.name
    console.log('你好阿，李银河')
    console.log('hello world')
    console.log(proxyObj.name)
}
watchFn(function foo() {
    const newName = proxyObj.name
    console.log('你好阿，李银河')
    console.log('hello world')
    console.log(proxyObj.name)
})

watchFn(function () {
    console.log(proxyObj.name, 'demo function ----')
})
function bar() {
    console.log('这是普通函数，不需要响应式')
}

// 当这行代码执行时，foo函数自动执行
proxyObj.name = 'kobe'
proxyObj.name = 'JAMES'
proxyObj.name = 'TANGSAN'
proxyObj.age = 78
