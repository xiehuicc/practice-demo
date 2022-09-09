
/* 
  * 方法装饰器
  * 装饰器用于方法的属性描述符（Property Descriptor），可用于观察、修改或者替换方法定义。
  * 方法装饰器不能用于声明文件，重载或者任何其他环境上下文
*/
function getNameDecorator(target: any, key: string,descriptor: PropertyDescriptor) {
  // 属性不可重写
  // descriptor.writable = false
  console.log(target, key, descriptor)
  descriptor.value = function() {
    return 'decorator'
  }
}


class Test5 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @getNameDecorator
  getName() {
    return this.name
  }
}

const test5 = new Test5('kobe');
console.log(test5)
// test5.getName = () => {
//   return '123'
// }
console.log(test5.getName())