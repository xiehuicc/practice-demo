// 通过dgram实现广播功能
const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const port = 3222;

server.on('message', function(message, rinfo){
    console.log('server got message from: ' + rinfo.address + ':' + rinfo.port);
});

server.bind(port); // 该套接字将接收所有网卡上3222端口上的消息。在绑定完成后，将触发listening事件