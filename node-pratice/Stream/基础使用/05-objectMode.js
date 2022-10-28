const Readable = require('stream').Readable

const readable = Readable()

readable.push('a')
readable.push('b')
readable.push(null)

readable.on('data', data => console.log(data)) 
// 流中的数据默认情况下都是Buffer类型
// <Buffer 61>
// <Buffer 62>

// Readable设置objectMode后：
const readable2 = Readable({ objectMode: true })
readable2.push('a')
readable2.push('b')
readable2.push({})
readable2.push(null)
readable2.on('data', data => console.log(data))

// a
// b
// {}

