/* 
优势:

    在不改变原有对象的情况下,动态地为对象添加新的功能。
    可以灵活地组合不同的装饰器,实现更复杂的功能。
    遵循"开放-封闭"原则,对扩展开放,对修改封闭。
    
  缺点:

    增加了代码的复杂性,可能会降低代码的可读性和维护性。
    装饰器的顺序可能会影响最终的结果,需要仔细考虑。
    如果装饰器的数量过多,会导致代码难以理解和调试。
  例子:
    一个常见的例子是,我们有一个计算图形面积的函数,但是需要在不修改原有函数的情况下,添加一些新的功能
    例如打印面积。我们可以使用装饰器模式来实现这个需求。

*/

function areaDecorator(target, name, descriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function(width, height) {
    const area = originalMethod.call(this, width, height);
    console.log(`The area is: ${area} square units.`);
    return area;
  };
  return descriptor;
}

class Rectangle {
  @areaDecorator
  getArea(width, height) {
    return width * height;
  }
}

const rect = new Rectangle();
console.log(rect.getArea(5, 10)); // 输出: The area is: 50 square units. 50


