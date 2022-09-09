/* 
  * 属性装饰器（Property Decorators）
  * 属性装饰器的表达式将在运行时作为函数调用
  * 属性装饰器只能用于观察已为类声明了特定名称的属性
*/
import 'reflect-metadata'

const formatMetadataKey = Symbol('format');

function format(formatString: string){
  console.log('format:',formatString)
  return Reflect.metadata(formatMetadataKey,formatString);
}

function getFormat(target: any,key: string) {
  console.log('getFormat:',target,key);
  return Reflect.getMetadata(formatMetadataKey,target,key);
}
class Greeter {
 @format('Hello, %s')
 greeting: string;

 constructor(message: string) {
  this.greeting = message;
 }
 greet() {
  let formatString = getFormat(this, 'greeting')
  console.log('formatString:',formatString)
  return formatString.replace('%s', this.greeting)
 }
}

const greeter = new Greeter('world')
console.log(greeter)
console.log(greeter.greet())