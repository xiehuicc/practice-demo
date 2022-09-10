/* 
  * Nodejs util 模块提供了很多工具函数。为了解决回调地狱问题，Nodejs v8.0.0 提供了 promisify 方法可以将 Callback 转为 Promise 对象。
*/


const fs = require('fs');
const util = require('util')

// 传统的callback写法
fs.readFile('test.txt',{encoding: 'utf8'},(err, data) => {
  console.log('error:', err)
  console.log('data:', data)
})

// promise 写法
const {promisify} = require('util')
const readFilePromisify = promisify(fs.readFile)

readFilePromisify('test.txt',{encoding: 'utf8'}).then((res) => {
  console.log('result:',res)
}).catch((err) => {
  console.log('error:',err)
})