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

// Depend优化 (课下)
/* 
    1>  depend方法（Depend中添加depend方法，在里面push需要响应的函数）
    2> 使用Set来保存依赖函数，防止重复收集
*/

// 封装一个响应式函数
let activateReactiveFn = null
function watchFn(fn) {
    activateReactiveFn = fn
    fn()
    activateReactiveFn = null
}

// 封装一个获取depend函数
const targetMap = new WeakMap()
function getDepend(target,key) { 
    // 根据target获取map的过程
    let map = targetMap.get(target)
    if(!map) {
        map = new Map()
        targetMap.set(target,map)
    }
    // 根据key获取depend的对象
    let depend = map.get(key)
    if(!depend) {
        depend = new Depend()
        map.set(key,depend)
    }
    return depend
}

// 对象的响应式
const obj = {
    name: 'why', // 每一个属性都对应一个depend对象
    age: 18     // 每一个属性都对应一个depend对象
}

// 自动监听对象属性变化 proxy（vue3）
const proxyObj = new Proxy(obj, {
    get(target, key, receiver) {
        // 收集函数依赖
        // 根据target,key获取depend
        const depend = getDepend(target,key)
        // 将响应函数 添加到depend
        depend.addDepend(activateReactiveFn)
        return Reflect.get(target, key, receiver)
    },
    set(target,key,newValue,receiver) {
        Reflect.set(target,key,newValue,receiver)
        // depend.notify()
        const depend = getDepend(target,key) // target 为obj对象
        console.log('depend',depend)
        depend.notify()
    }
})

watchFn(function foo() {
   console.log('------------第一次执行name函数------')
    console.log('你好阿，李银河')
    console.log('hello world')
    console.log(proxyObj.name)
    console.log('-------结束执行name函数--------')
})

watchFn(function () {
    console.log(proxyObj.name, 'demo function ----')
})
watchFn(function () {
    console.log(proxyObj.age, 'age function ----')
})
function bar() {
    console.log('这是普通函数，不需要响应式')
}

// 当name属性更改时，所有的watchFn都会响应，我们需要哪个属性更改，哪个属性响应式
console.log('==============================================改变name属性')
proxyObj.name = 'kobe'
// proxyObj.name = 'JAMES'
// proxyObj.name = 'TANGSAN'