const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();
  const ite = on(ee, 'foo');

  process.nextTick(() => {
    ee.emit('foo', 'Hello');
    ee.emit('foo', 'Node.js');
    // ite.return(); // 调用后可以结束 for await...of 的遍历
    // ite.throw() // 迭代器对象抛出一个错误
  });

  try {
    for await (const event of ite) {
      console.log(event); //prints ['Hello'] ['Node.js']
      await sleep(2000);
    }
  } catch (err) {
    console.log(err.message); // unknown mistake.
  }
})();

// node中实现睡眠
async function sleep(s) {
  return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(s);
      }, s);
  });
}