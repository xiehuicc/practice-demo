/* 
  1. 如果在对象上直接添加方法，那么有多少个new Person()创建出的对象，那么其对象上就有多少个方法，消耗内存
  2. 原型的做法
*/

function Person(name,age,address) {
  this.name = name;
  this.age = age;
  this.address = address;
}

Person.prototype.eating = function () {
  console.log('eating');
}

let p1 = new Person('why',18,'shanghai');
let p2 = new Person('kobe',32,'new York');
p1.eating()