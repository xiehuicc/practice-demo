/* 
  * 访问器装饰器（Accessor Decorators）
  * 1. 访问器装饰器用于访问器属性描述符（Property Descriptor），可用于观察、修改或者替换访问器的定义
  * 2. ts不允许同时装饰单个成员的get和set 访问器
*/

function configurable(value: boolean) {
  return function (target:any, key:string, descriptor: PropertyDescriptor) {
    console.log(target, key)
    console.log(descriptor)
    descriptor.configurable = value;
  }
}

class Point {
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }
  @configurable(false)
  get x() {
    return this._x
  }
  
  @configurable(false)
  get y() {
    return this._y
  }
}

const pointExample = new Point(12,20)
console.log(pointExample)