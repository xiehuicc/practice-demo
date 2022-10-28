function test(callback) {
  callback('hello')
}

function demo(param) {
  console.log(param);
}
test(function demo(res) {
  console.log(res)
})
// or
// test(demo)


function doSomeThing (thing) {
  console.log(thing)
}

function comeTo (place, cb) {
  const thing = '到 ' + place + ' 学习 Node'
  cb(thing) // 调用回调函数
}

comeTo('Juejin', doSomeThing) // 传入doSomeThing函数，还并未调用
// 到 Juejin 学习 Node