const fs = require('fs');
const { Console } = require('console');

// custom simple logger
const logger = new Console(fs.createWriteStream('./stdout.log'), fs.createWriteStream('./stderr.log'));

// daemon.js 文件里处理逻辑开启一个定时器每 10 秒执行一次，使得这个资源不会退出，同时写入日志到子进程当前工作目录下
setInterval(function() {
    logger.log('daemon pid: ', process.pid, ', ppid: ', process.ppid);
}, 1000 * 10);

setTimeout(() => {
    process.kill()
    logger.log('process kill');
},60* 1000);