'use strict';
const Readable = require('stream').Readable;

// 创建可读流
// 流式消耗迭代器中的数据。
class ToReadable extends Readable {
  constructor(iterator) {
    super()
    this.iterator = iterator
  }

  // 子类需要实现该方法
  // 这是生产数据的逻辑
  _read() {
    const res = this.iterator.next()
    if(res.done) {
      // 数据已枯竭，调用push(null)通知流
      return this.push(null)
    }
    setTimeout(()=> {
      // 通过push方法将数据添加到流中
      this.push(res.value + '\n')
    },0)
  }
}

const iterator = function (limit) {
  return {
    next: function () {
      if(limit--) {
        return {done: false, value: limit + Math.random()}
      }
      return { done: true}
    }
  }
}(1e10)

const readable = new ToReadable(iterator)

// 监听‘data’事件，一次获取一个数据
readable.on('data', data => {
  process.stdout.write(data)
})

// 所有的数据已读完
readable.on('end', () => {
  process.stdout.write('DONE!')
})

// 执行上述代码，将会有100亿个随机数源源不断地写进标准输出流