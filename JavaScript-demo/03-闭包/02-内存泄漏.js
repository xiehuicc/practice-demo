// 内存泄漏：只要定义的变量 后续没有使用，但没有销毁就是内存泄漏，不是只有闭包才有可能存在的

function createFnArray() {
  var array = new Array(1024*1024).fill(1)
  return function() {
    console.log('length',array.length)
  }
}

// 1024*1024*4(int 型占4字节) = 4M ； 4*100 = 400M
var arrayFn = []
setTimeout(() => {
  for (var i = 0; i< 100; i ++) {
    setTimeout(() => {
      arrayFn.push(createFnArray())
    },i*100)
  }
},1000)

// arrayFn = null , 可以直接通过 赋值nul来销毁，
setTimeout(() => {
  for(var i =0; i< 50; i++) {
    setTimeout(() => {
      arrayFn.pop()
    },i*100)
  }
},10000)
var fn = createFnArray()
fn()