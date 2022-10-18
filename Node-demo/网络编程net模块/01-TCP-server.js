// tcp服务端如下：

const net = require('net')

const PORT = 3002;
const HOST = '127.0.0.1';

// tcp 服务端
const server = net.createServer(function (socket) {
  console.log('服务端：受到客户端的请求')

  socket.on('data', function (data) {
    console.log('服务端：收到客户端数据，内容为{'+ data + '}')
    
    // 给客户端返回数据
    socket.write('你好，我是服务端')
  })

  socket.on('close', function() {
    console.log('服务端：客户端连接断开');
  })
})

server.listen(PORT, HOST, function () {
  console.log('服务端：开始监听来自客户端的请求')
})