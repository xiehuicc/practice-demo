const EventEmitter  = require('events')

class MyEvmitter extends EventEmitter {}

const myEvmitter = new MyEvmitter()

// 每个事件默认可以注册最多 10 个监听器，EventEmitter 实例允许添加更多的监听器，但会向 stderr 输出跟踪警告，表明可能会导致内存泄漏。
console.log(MyEvmitter.defaultMaxListeners)

myEvmitter.on('event', function(a, b) {
  console.log(a, b,this, this === myEvmitter) // true;this 关键词会被指向监听器所绑定的 EventEmitter 实例。
})


myEvmitter.emit('event','a','b')