const EventEmitter = require('events').EventEmitter
const emitter = new EventEmitter()
let m = 0;

// 当使用 eventEmitter.on() 注册监听器时，监听器会在每次触发命名事件时被调用
emitter.on('event', () => {
  console.log(++m);
});
emitter.emit('event');
// 打印: 1
emitter.emit('event');
// 打印: 2

let n = 0
//  使用 eventEmitter.once() 可以注册最多可调用一次的监听器。 当事件被触发时，监听器会被注销，然后再调用。
emitter.once('eventOnce', () => {
  console.log(++n)
})

emitter.emit('eventOnce');
emitter.emit('eventOnce')