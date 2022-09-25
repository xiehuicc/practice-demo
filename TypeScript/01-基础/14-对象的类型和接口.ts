/*
  * 什么是接口：
    面向对象语言中，接口(interface)是一个很重要的概念，它是行为的抽象，而具体如何行动需要类(class)去实现(implement)
    TypeScript中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对（对象的形状(shape)进行描述）
*/

// 可选属性
interface Person {
  name: string;
  age?: number;
}

let person: Person = {
  name: 'kobe'
}
console.log(person)

// 任意属性
// 使用 [propName: string] 定义了任意属性取 string 类型的值
//注意：一旦定义了任意属性，那么确定属性和可选属性的参数类型都必须是它的类型的子集
interface Person2 {
  name: string;
  age?: number;
  // [prop:string]: string; // 不能将类型“number”分配给类型“string”。
  [prop:string]: any;
}
let Tom: Person2 = {
  name: 'james',
  age: 23,
  gender: 'male'
}
console.log(Tom)

// 只读属性
interface Person3 {
  readonly id: number;
  name: string;
  age?: number;
  [prop:string]: any;
}

let tom4  : Person3 = {
  id: 89757,
  name: 'Tom',
  gender: 'male',
};

console.log(tom4)

// tom4.id = 12 // 无法分配到 "id" ，因为它是只读属性
