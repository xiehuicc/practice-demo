/* 
  asyncHooks 的 createHook() 方法返回一个用于启用（enable）和禁用（disable）hooks 的实例，
  该方法接收 init/before/after/destory 四个回调来标志一个异步资源从初始化、回调调用之前、回调调用之后、销毁整个生命周期过程。
*/

// 注意 init 回调里写日志造成 “栈溢出” 问题
// 一个异步资源的生命周期中第一个阶段 init 回调是当构造一个可能发出异步事件的类时会调用，要注意由于使用 console.log() 输出日志到控制台是一个异步操作，
// 在 AsyncHooks 回调函数中使用类似的异步操作将会再次触发 init 回调函数，进而导致无限递归出现 RangeError: Maximum call stack size exceeded 错误，也就是 “ 栈溢出”。

// 调试时，一个简单的记录日志的方式是使用 fs.writeFileSync() 以同步的方式写入日志，这将不会触发 AsyncHooks 的 init 回调函数。
const asyncHooks = require('async_hooks')
const fs = require('fs')
const util = require('util')

const asyncId = () => asyncHooks.executionAsyncId();
const triggerAsyncId = () => asyncHooks.triggerAsyncId();

// 这将不会触发 AsyncHooks 的 init 回调函数。
const syncLog = (...args) => fs.writeFile('log.txt', `${util.format(...args)}\n`, { flag: 'a' });
const hooks = asyncHooks.createHook({
  init(asyncId, type, triggerAsyncId, resource) {
    syncLog('init: ', asyncId, type, triggerAsyncId)  
    // console.log('init: ', asyncId, type, triggerAsyncId) // RangeError: Maximum call stack size exceeded
  }
});
hooks.enable();

fs.open('hello.txt', (err, res) => {
  syncLog(`fs.open asyncId: ${asyncId()}, fs.open triggerAsyncId: ${triggerAsyncId()}`);
});