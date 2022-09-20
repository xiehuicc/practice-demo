const http = require('http');
const server = http.createServer((req, res) => {
    process.title = 'node-worker'
    res.writeHead(200, {
        'Content-Type': 'text/plan'
    });
    res.end('I am worker, pid: '+ process.title + process.pid + ', ppid: ' + process.ppid);
    throw new Error('worker process exception!'); // 测试异常进程退出、重建
});

let worker;
process.on('message', function (message, sendHandle) {
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