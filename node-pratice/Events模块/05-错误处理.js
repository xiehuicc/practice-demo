const events = require('events');
const emitter = new events.EventEmitter();

// 应该始终为 'error' 事件注册监听器，否则一旦抛出异常没有人为处理，就可能造成程序自动退出，之后的 console.log('test'); 也不会得到执行
emitter.on('error', function(err) {
  console.log(err);
})

emitter.emit('error', new Error('This is a error'));
console.log('test');