/* 
  async hooks 模块提供了 executionAsyncId() 函数标志当前执行上下文的asyncId
  还有一个 triggerAsyncId() 函数来标志当前执行上下文被触发的异步资源 Id（triggerAsyncId），也就是当前异步资源是由哪个异步资源（async scope）创建的。 
  每个异步资源都会生成 asyncId，该 id 会呈递增的方式生成，且在 Node.js 当前实例里全局唯一。
*/
const asyncHooks = require('async_hooks');
const fs = require('fs');

const asyncId = () => asyncHooks.executionAsyncId();
const triggerAsyncId = () => asyncHooks.triggerAsyncId();

console.log(`Global asyncId: ${asyncHooks.executionAsyncId()}, Global triggerAsyncId: ${triggerAsyncId()}`);

fs.open('hello.txt', (err, res) => {
  console.log(`fs.open asyncId: ${asyncId()}, fs.open triggerAsyncId: ${triggerAsyncId()}`);
});

// 全局的 asyncId 为 1，fs.open 回调里打印的 triggerAsyncId 为 1 由全局触发。
// Global asyncId: 1, Global triggerAsyncId: 0
// fs.open asyncId: 5, fs.open triggerAsyncId: 1