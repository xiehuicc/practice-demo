const { AsyncLocalStorage } = require("async_hooks") 
const express = require("express")
const { v4 } = require("uuid")

const app = express()
const asyncLocalStorage = new AsyncLocalStorage()

app.use((req, _, next) => {
  const traceId = req.header('x-trace-id')
  console.log(v4)
//   判断方式不同：
// 使用 ?? 时，只有当值1为null或undefined时才返回值2；
// 使用 || 时，值1会转换为布尔值判断，为true返回值1，false 返回值2
// ??更加适合在不知道变量是否有值时使用。
  asyncLocalStorage.run(traceId ?? v4(), next)
})

app.get('/', async function (_, res) {
  console.log('start', asyncLocalStorage.getStore())
  // 模拟耗时操作
  await new Promise((resolve) => {
    setTimeout(() => resolve(), 100)
  })
  console.log('end', asyncLocalStorage.getStore())
  res.send('Hello World!')
})

app.listen(3000,()=> {
  console.log('listening on port 3000')
})