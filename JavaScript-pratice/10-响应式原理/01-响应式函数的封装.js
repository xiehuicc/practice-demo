// 封装一个响应式函数
let reactiveFns = [] // 收集响应式函数
function watchFn(fn) {
    reactiveFns.push(fn)
}

// 对象的响应式
const obj = {
    name: 'why',
    age: 18
}

function foo () {
    const newName = obj.name
    console.log('你好阿，李银河')
    console.log('hello world')
    console.log(obj.name)
}
watchFn(function foo() {
    const newName = obj.name
    console.log('你好阿，李银河')
    console.log('hello world')
    console.log(obj.name)
})

watchFn(function () {
    console.log(obj.name, 'demo function ----')
})
function bar() {
    console.log('这是普通函数，不需要响应式')
}

// 当这行代码执行时，foo函数自动执行
obj.name = 'kobe'
reactiveFns.forEach(fn => {
    fn()
})