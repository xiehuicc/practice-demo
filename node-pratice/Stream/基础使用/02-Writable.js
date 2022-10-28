// 创建一个可写流, 只是需要实现的是_write(data, enc, next)方法

const Writable = require('stream').Writable

const writable = Writable()

// 实现`_write`方法
// 这是将数据写入底层的逻辑
writable._write = function (data,encoding,next) {
  // 将流中的数据写入底层
  process.stdout.write(data.toString().toUpperCase())
  // 写入完成时，调用next()方法通知流传入下一个数据
  process.nextTick(next)
}

// 所有数据均已写入底层
writable.on('finish', () => {
  process.stdout.write('DONE!!')
})

// 将一个数据写入流中
writable.write('a'+ '\n')
writable.write('b'+ '\n')
writable.write('c'+ '\n')
writable.write('d'+ '\n')

// 再无数据写入流时，调用`end`方法
writable.end()

/* 
  * 上游通过调用writable.write(data)将数据写入可写流中。write()方法会调用_write()将data写入底层。
  * 在_write中，当数据成功写入底层后，必须调用next(err)告诉流开始处理下一个数据。
  * next的调用既可以是同步的，也可以是异步的。
  * 上游必须调用writable.end(data)来结束可写流，data是可选的。此后，不能再调用write新增数据。
  * 在end方法调用后，当所有底层的写操作均完成时，会触发finish事件。
*/