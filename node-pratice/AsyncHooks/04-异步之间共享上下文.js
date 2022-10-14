/* 
  Node.js v13.10.0 增加了 async_hooks 模块的 AsyncLocalStorage 类，可用于在一系列异步调用中共享数据。
*/

const { AsyncLocalStorage } = require('async_hooks');
const asyncLocalStorage = new AsyncLocalStorage();

//asyncLocalStorage.run() 函数第一个参数是存储我们在异步调用中所需要访问的 共享数据，第二个参数是一个异步函数，
// 我们在 setTimeout() 的回调函数里又调用了 test2 函数，这一系列的异步操作都不影响我们在需要的地方去获取 asyncLocalStorage.run() 函数中存储的共享数据。
asyncLocalStorage.run({ traceId: 1 }, test1);

async function test1() {
  setTimeout(() => test2(), 2000);
}
async function test2() {
  console.log(asyncLocalStorage.getStore().traceId);
}

// AsyncLocalStorage 用途很多，例如在服务端必不可少的日志分析，一个 HTTP 从请求到响应整个系统交互的日志输出如果能通过一个 traceId 来关联，在分析日志时也就能够清晰的看到整个调用链路。
const http = require('http');

function logWithId(msg) {
  const id = asyncLocalStorage.getStore();
  console.log(`${id !== undefined ? id : '-'}:`, msg);
}
let idSeq = 0;
http.createServer((req, res) => {
  asyncLocalStorage.run(idSeq++, () => {
    logWithId('start');
    setImmediate(() => {
      logWithId('processing...');
      setTimeout(() => {
        logWithId('finish');
        res.end();
      }, 2000)
    });
  });
}).listen(8080);