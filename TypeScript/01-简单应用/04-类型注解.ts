const a = 123
const firstNumber = 7
const secondNumber = 8
// TS类型判断，TS自动分析变量类型，total不用类型注解，也知道是number类型
const total = firstNumber + secondNumber

// 此时firstNumber,secondNumber TS无法分析变量类型，就要进行类型注解
function sum(firstNumber: number, secondNumber: number) {
    return firstNumber + secondNumber
}

// TS可以分析result为number类型
const result = sum(1, 2)
console.log(result)

// void类型没有返回值
function sayHello(): void {
    console.log('hello');
}

// never类型，函数内代码不可能全部执行完
function errorEmitter(): never {
    while (true) {

    }
    console.log(111)
}

// 解构 类型注解
function add({ first, second }: { first: number, second: number }) {
    return first + second
}

console.log(add({ first: 2, second: 2 }))