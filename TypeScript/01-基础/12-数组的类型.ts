// 数组成员类型
let fibonacci1: number[] = [1,1,2,3,5]

// 数组泛型
let fibonacci2: Array<string> = ['1','1','2','3','4']

// 用接口表示数组,NumberArray 表示：只要索引的类型是数字时，那么值的类型必须是数字。
interface NumberArray {
  [index:number]:number
}

let fibonacci3: NumberArray = [1,2,3,4]

// 类数组（Array-like Object）不是数组类型，比如 arguments
function sum() {
  // let args: number[] = arguments //报错； arguments 实际上是一个类数组，不能用普通的数组方式来描述，而应该用接口。
} 

function sum2() {
  let args:{
    [index:number]: number;
    length: number;
    callee: Function;
  } = arguments;
}

// 事实上常用的类数组都有自己的接口定义，如 IArguments、NodeList、HTMLCollection
// 其中 IArguments 是 TypeScript 中定义好了的类型，它实际上是：
interface IArguments {
  [index: number]: any;
  length: number;
  callee: Function;
}