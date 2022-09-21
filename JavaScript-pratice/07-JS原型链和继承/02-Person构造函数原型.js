function Person() {

}

console.log(Person.prototype) // {} 是因为Person只列出了可枚举的属性 enumerable: false,

// constructor属性可以直接获取 constructor 指向构造函数本身
console.log(Person.prototype.constructor) //[Function: Person]

console.log(Object.getOwnPropertyDescriptors(Person.prototype)) // 获取对象的所有属性描述器
// 打印：
// {
//   constructor: {
//     value: [Function: Person],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }
// }
console.log(Person.prototype.__proto__)

Object.defineProperty(Person.prototype, "constructor", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "哈哈哈哈"
})

console.log(Person.prototype)