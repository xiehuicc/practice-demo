/* 
  默认未开启的 Promise 执行跟踪
    由于 V8 的 promise introspection API 对于获取 asyncId 的执行成本比较高，所以默认情况下，我们是不给 Promise 分配新的 asyncId。
    不过没关系，我们可以通过执行 async_hooks.createHook(callbacks).enable() 函数强制开启对 Promise 分配 asyncId:
*/
const asyncHooks = require('async_hooks');

const asyncId = () => asyncHooks.executionAsyncId();
const triggerAsyncId = () => asyncHooks.triggerAsyncId();

// 默认未开启的 Promise 执行跟踪
Promise.resolve().then(() => {
  // Promise asyncId: 0. Promise triggerAsyncId: 0
  console.log(`Promise asyncId: ${asyncId()}. Promise triggerAsyncId: ${triggerAsyncId()}`);
})

// 启用 Promise 异步跟踪。
const hooks = asyncHooks.createHook({})
hooks.enable()

Promise.resolve().then(() => {
  // Promise asyncId: 3. Promise triggerAsyncId: 2
  console.log(`Promise asyncId: ${asyncId()}. Promise triggerAsyncId: ${triggerAsyncId()}`);
})