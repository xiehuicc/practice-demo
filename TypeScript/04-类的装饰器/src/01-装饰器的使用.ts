
/* 
  * 类的装饰器(decorator)
  * 1. 装饰器本身是函数
  * 2. 装饰器通过 @ 符号来修饰
  * 3. 装饰器在类创建的时候就会被执行，而不是类实例化的时候
  * 4. 装饰器有多个时，执行顺序是至下而上（越靠近类的装饰器越早执行）
*/ 

function testDecorator(constructor: any) {
  console.log("Testing decorator")
}

function testDecorator1(constructor: any) {
  console.log("Testing decorator1")
}

@testDecorator 
@testDecorator1
class Test {}

const test = new Test()