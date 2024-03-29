// UDP 服务端
const PORT = 3333
const HOST = '127.0.0.1'

const dgram = require('dgram')
const server = dgram.createSocket('udp4')

server.on('listening',function() {
  const address = server.address()
  console.log('UDP server listening on '+ address.address + ":", + address.port);
})

server.on('message', function(message, remote) {
  console.log(remote.address + ':' + remote.port + '-' + message);
})

server.bind(PORT,HOST)