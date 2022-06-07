let name = 'kobe'
let age = 18

// 内存会开辟一个空间（例如：0x100）
exports.name = name
exports.age = age

/* 
 源码中有module.exports = exports 
 实际上是module.exports进行导出

 */


setTimeout(() => {
  exports.name = '1111111'
},1000)
console.log(name)

//  如果为引用对象类型导出，此时内存中会给该对象创建一个新的内存空间（0x200），
//  exports.name修改了name值
 module.exports = {
   name:'james',
   age:age
 }