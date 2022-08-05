
// 纯函数：1.相同的输入一定产生相同的输出； 2. 在执行过程中不会产生副作用。

// 数组的slice方法： 不会对原数组进行任何操作，而是生成一个新数组； 是一个纯函数
// 数组的splice方法：会改变原数组；不是纯函数

// foo是一个纯函数
function foo(num1,num2) {
    return num1 *2 + num2 *num1
}

// bar不是一个纯函数，因为它改变了外界的变量（产生了副作用）
let name = 'abc'
function bar() {
    console.log('bar 其他代码执行');
    name = 'cba'
}

bar()

console.log(name);
