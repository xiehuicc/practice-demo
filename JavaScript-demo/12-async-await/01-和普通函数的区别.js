async function foo () {
  console.log('foo function start');
  console.log('中间代码')
  console.log('foo function end');
  throw new Error('error message')
  return 123
}

foo().catch(err => console.log('foo err',err))
// async 和普通函数执行顺序没有区别
console.log('其他代码')

console.log('---------------')
// 异步函数的返回值 一定是一个promise对象
const promise = foo();
promise.then(res => {
  console.log(res)
}).catch(err => {
  console.log('err',err)
})

console.log('后续代码~~~~~~~') // 后续代码继续执行，不会中断，异常会被catch捕获