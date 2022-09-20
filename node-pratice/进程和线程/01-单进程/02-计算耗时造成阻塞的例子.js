const http = require('http')

const server = http.createServer()
const longComputer = () => {
  let sum = 0
  for (let i = 0; i < 1e10; i++) {
    sum += i
  }
  return sum
}
server.listen(3000,()=> {
  process.title = 'TestNodeProcess'
  console.log('listen on port:3000')
  console.log('process id',process.pid)
})

server.on('request',(req, res) => {
  console.log(req.url)
  if(req.url === '/compute') {
    console.info('compute start', new Date())
    const sum = longComputer()
    console.info('compute end', new Date())
    res.end(`Sum is ${sum}`)
  } else {
    res.end('OK')
  }
  // 下面代码会被阻塞
  console.log('other code ....')
})