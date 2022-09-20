function* foo() {
  console.log('函数开始执行')
  const value1 = 100
  console.log(value1);
  yield value1

  const value2 = 200
  console.log(value2);
  yield

  const value3 = 300
  console.log(value3);
  yield
  
  console.log('函数执行结束')
  return '123'
}

const generate = foo()

// 开始执行第一段yield代码
console.log('返回值1',generate.next())
// 开始执行第二段yield代码
generate.next()
generate.next()

console.log('返回值3',generate.next())