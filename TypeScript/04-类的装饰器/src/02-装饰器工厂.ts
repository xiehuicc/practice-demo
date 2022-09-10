/* 
  * 装饰厂（Decorator Factories）
  * 1. 如果我们想自定义如何将装饰器应用于声明，我们可以写一个装饰器工厂
  * 2. 装饰器工厂是一个函数
*/

function testDecoratorFactories(flag: boolean) {
  if(flag) {
    return function (constructor: any) {
      constructor.prototype.getName = function () {
        console.log('why')
      }
    }
  } else {
    return function (constructor: any) {};
  }
  
}

// constructor: any 优化
// new: 这是一个构造函数， 接收多个参数，返回一个any类型
// constructor: T 
function testDecorator3<T extends new (...args: any[]) => any>(constructor: T) {
  return class extends constructor {
    name = 'james';
    getName () {
      return this.name
    }
  };
}


@testDecoratorFactories(true)
// @testDecorator2(false)
class Test1 {}

const test1 = new Test1();
(test1 as any).getName()

@testDecorator3
class Test3 {
  name: string;
  constructor(...arg: string[]) {
    this.name = arg[0] + ' ' + arg[1];
  }
}
const test3 = new Test3('why','kobe')
console.log(test3);

// 直接访问报错 类型“Test3”上不存在属性“getName”
// console.log(test3.getName())
