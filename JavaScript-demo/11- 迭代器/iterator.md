### 1. 什么是迭代器
  > 迭代器是帮助我们对某个数据结构进行遍历的对象
  >  在JavaScript中，迭代器也是一个具体的对象，这个对象需要符合迭代器协议（iterator protocol）：
  >  - 迭代器协议定义了一系列值（无论是有限还是无限个）的标准方式；
  >  - 那么在js中这个标准就是一个特定的next方法 
  > next方法有如下要求：
  >  - 无参函数或者一个参数函数，返回一个拥有两个属性的对象：
  >  - done(Boolean)
  >    迭代完 done为true
  >  - value
  >    迭代器返回任何JavaScript值，done为true时可省略。



### 2. 什么是可迭代对象
  > - 它和迭代器是不同的概念
  > - 当一个对象实现`iteator protocol`协议时，他就是一个可迭代对象
  > - 这个对象的要求是 必须实现@@itrator方法，在代码中我们使用`Symbol.iteator`访问属性；
   


### 3. 原生迭代器对象
  > 很多原生对象已经实现了可迭代协议，会生成一个迭代器对象:
  > - String 、Array、Map、Set、arguments对象、NodeList集合；

#### 可迭代对象的应用
  > 1. JavaScript中语法 for...of、展开运算符、yield、 解构赋值;
  > 2. 创建对象时：new Map([iterator])、new WeakMap([iterator])、new Set([iterator])、new WeakSet([iterator]);
  > 3. 一些方法调用：Promise.all(iterator)、Promise.race(iterator)、Array.from(iterator);

### 什么是生成器
  > 生成器是ES6中新增的一种函数控制、使用的方案，它可以让我们更加灵活的控制函数何时继续执行，暂停执行等
  > 生成器函数也是一个函数，但是和普通函数有一些区别
  > - 首先, 生成器函数需要在function的后面加一个符号 *
  > - 其次，生成器函数可以通过yield关键字来控制函数执行流程
  > - 最后，生成器的返回值是一个Generator(生成器)
  >     - 生成器是一种特殊的迭代器
  >     - MDN: Instead, they return a special type of iterator,called a Generator
  