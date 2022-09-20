const http = require('http')

const server1 = http.createServer((req,res) => {
    res.end('hello server1')
})

// 加了ip参数，本机的ip地址不会不到
server1.listen(8000,"127.0.0.1",()=> {
    console.log('server1已启动成功')
})

const server2 = new http.Server((req,res) => {
    res.end('hello server2')
})

server2.listen(8001, ()=> {
    console.log('server2已启动成功')
})