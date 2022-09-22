/* 
工作进程
    worker.js 子进程处理逻辑如下：

    1.创建一个 server 对象，注意这里最开始并没有监听 3000 端口
    2.通过 message 事件接收主进程 send 方法发送的消息
    3.监听 uncaughtException 事件，捕获未处理的异常，发送自杀信息由主进程重建进程，子进程在链接关闭之后退出
 */
const http = require('http');
const server = http.createServer((req, res) => {
    process.title = 'node-worker'
    res.writeHead(200, {
        'Content-Type': 'text/plan'
    });
    res.end('I am worker, pid: '+ process.title + process.pid + ', ppid: ' + process.ppid);
    process.send(process.pid)
    throw new Error('worker process exception!'); // 测试异常进程退出、重建
});

let worker;
process.on('message', function (message, sendHandle) {
    console.log('worker process message',message)
    if (message === 'server') {
        worker = sendHandle;
        worker.on('connection', function(socket) {
            server.emit('connection', socket);
        });
    }
});

process.on('uncaughtException', function (err) {
    console.log(err);
    process.send({act: 'suicide'});
    worker.close(function () {
        process.exit(1);
    })
})