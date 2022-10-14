### Async Hooks 
> Async Hooks 功能是 Node.js v8.x 版本新增加的一个核心模块，它提供了 API 用来追踪 Node.js 程序中异步资源的声明周期，可在多个异步调用之间共享数据。
> 1. 提供了一个处理异步任务资源的生命周期;
> 2. 暴露了方便追踪handel objects生命周期的Hook 

> 之所以会引入async_hooks模块，是因为在异步调用中很难正确的追踪异步调用的处理逻辑及关系。而async_hooks模块友好解决了上诉问题，主要提供以下功能和特性：
> - 每一个函数都会提供一个上下文，我们称之为async scope;
> - 每一个async scope中都有一个asyncId，是当前async scope的标志（相同scope的asyncId必定相同）最外层的asyncId是1，每个异步资源在创建时asyncId是递增的;
> - 每一个async scope中都有一个triggerAsyncId表示当前函数是由哪个async scope触发生成的;
> - 通过asyncId和triggerAsyncId我们可以很方便的追踪整个异步调用关系链路
> - 我们可以通过async_hooks.createHook函数来注册关于每一个异步资源在生命周期中发生的init/before/after/destory/promiseResolve等相关事件的监听函数;
> - 通一个async scope可能被调用及执行多次，不管执行多少次，其asyncId必定相同，通过监听函数，我们很方便追踪其执行的次数及时间及上线文关系；

### executionAsyncId和trrigerAsyncId
> async_hooks模块提供executionAsyncId函数和triggerAsyncId函数来获取当前上下文的asyncId 和 triggerAsyncId：
```javascript
const async_hooks = require('async_hooks');
const fs = require('fs');
console.log('global.asyncId:', async_hooks.executionAsyncId());  // global.asyncId: 1
console.log('global.triggerAsyncId:', async_hooks.triggerAsyncId()); // global.triggerAsyncId: 0
fs.open('./app.js', 'r', (err, fd) => {
  console.log('fs.open.asyncId:', async_hooks.executionAsyncId()); // fs.open.asyncId: 7
  console.log('fs.open.triggerAsyncId:', async_hooks.triggerAsyncId()); // fs.open.triggerAsyncId: 1
});
```

通过上述打印结果我们可以看到全局的 asyncId 为 1，而 fs.open 回调函数的 asyncId 为 7，triggerAsyncId为 1。可以看出 fs.open 这个异步资源是由全局进来调用触发的。

### async_hooks.createHook(callbacks)
> 我们可以使用 async_hooks.createHook 来创建一个异步资源的钩子，注册一些关于异步资源生命周期中可能发生事件的回调函数作为 async_hooks.createHook 的输入。每当异步资源被创建/执行/销毁时这些钩子函数会被触发：
```javascript
const async_hooks = require('async_hooks');
const asyncHook = async_hooks.createHook({
  init(asyncId, type, triggerAsyncId, resource) { },
  destroy(asyncId) { }
});
asyncHook.enable();   //通过 enable 函数开启钩子功能
```

### init(asyncId, type, triggerAsyncId, resource)

### after(asyncId)
### destroy(asyncId)destroy(asyncId)
### promiseResolve(asyncId)

### AsyncLocalStorage



doc: https://segmentfault.com/a/1190000040362399