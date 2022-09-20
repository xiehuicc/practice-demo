function* foo(num) {
  console.log('函数开始执行')
  const value1 = 100 * num
  console.log(value1);
  const n = yield value1

  const value2 = 200 * n
  console.log(value2);
  const count = yield value2

  const value3 = 300* count
  console.log(value3);
  yield  value3
  
  console.log('函数执行结束')
  return '123'
}

const generate = foo(5)

// 开始执行第一段yield代码
console.log('返回值1',generate.next())
// 开始执行第二段yield代码
generate.next(10)

console.log('返回值3',generate.next(25))
generate.next()