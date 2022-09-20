var message = 'Hello World'

function foo () {
    console.log(message)
}

function bar () {
    var message = "Hello Bar"
    foo()
}

bar()
// 在编译过程中，就已经确立了foo的父级作用域为 GO（global Object），和函数的调用顺序无关。

//输出： Hello World