// 加入有两个（多个）函数同时被调用，要保证这两函数的执行顺序

function fibonacci(n) {
    if (n == 0 || n == 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }

console.log(fibonacci(35))

let memorize = [1,1]
let redo = 0
let fib = function(n) {
    redo++
    if(!memorize[n-1]) {
        memorize[n-1] = fib(n-1) + fib(n-2)
    }
    return memorize[n-1]
}
fib(35)
console.log('memorize ==', memorize)

function* FbGenerator(count) {
    var n = 35;
    for (var i = 0; i < count; i++) {
      yield n;
    }
    return;
  }

console.log(FbGenerator(500))