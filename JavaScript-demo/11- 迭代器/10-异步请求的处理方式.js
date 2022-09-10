function requestData(url) {
  return new Promise(function (resolve, reject) {
    // 模拟网络请求
    setTimeout(() => {
      resolve(url)
    },2000)
  })
}

/* 
  * 需求
  * 1>url: why -> res: why
  * 2>url: res+ 'aaa' -> res: whyaaa
  * 3>url: res + 'bbb' -> res: whyaaabbb
*/

// 1. 嵌套回调 回调地狱问题
requestData('why').then(res => {
  requestData(res + 'aaa').then((res) => {
    requestData(res + 'bbb').then((res) => {
      console.log('requestData',res)
    })
  })
})

// 2. Promise方案
requestData('why').then(res => {
  return requestData(res + 'aaa')
}).then(res=> {
  return requestData(res + 'bbb')
}).then(res => {
  console.log('promise',res)
})

// 3. generator与promise结合方案

function* generatorFn () {
  const res = yield requestData('why')
  const res1 = yield requestData(res +'aaa')
  const res2 = yield requestData(res1 +'bbb')
  console.log('res',res2)
  return res2
}

// 手动执行生成器函数
const generator = generatorFn()
generator.next().value.then(res => {
  generator.next(res).value.then(res => {
    generator.next(res).value.then(res => {
      console.log('generator',res)
    })
  })
})

// 自动执行生成器函数
function execGeneratorFn () {
  const generator = generatorFn()
  function exec(res) {
    const result = generator.next(res)
    // 生成器执行完done为true
    if(result.done) {
      return 
    }
    result.value.then(res => {
      exec(res)
    })
  }
  exec()
}
execGeneratorFn()

// 4. async/await

async function generatorFn2() {
  const res = await requestData('why')
  const res1 = await requestData(res + 'aaa')
  const res2 = await requestData(res1 + 'bbb')
  console.log('res2',res2)
}
generatorFn2()