const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();
  const ite = on(ee, 'foo');

  process.nextTick(() => {
    ee.emit('foo', 'Hello');
    ee.emit('error', new Error('unknown mistake.')) // 错误信息会被抛出并且退出循环，该实例注册的所有事件侦听器也会一并移除。
    ee.emit('foo', 'Node.js');
  });

  try {
    for await (const event of ite) {
      console.log(event); // prints ['Hello']
    }
  } catch (err) {
    console.log(err.message); // unknown mistake.
  }
})();