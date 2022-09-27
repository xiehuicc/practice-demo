/*  1.静态方法 和静态属性
        使用 static 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用。
 */
class Animal {
  static num = 43;
  static isAnimal(a:any): boolean {
    return a instanceof Animal;
  }
}
let a1 = new Animal();
console.log(Animal.isAnimal(a1)); // true
console.log(Animal.num) // 43
// a.isAnimal(a); // 属性“isAnimal”在类型“Animal”上不存在

/* 
  2.访问修饰符
    - public: 修饰的属性或者方法是公有的，可以在任何地方访问到，默认所有的属性和方法都是public的
    - private: 修饰的属性或方法是私有的，不能再声明它的类的外部访问
    - protected: 修饰的属性或方法是受保护的，它和private类似，区别在于它在子类中也是允许访问的。(protected 成员仅对声明它们的类及其子类可访问)
*/

// public:
class Animal2 {
  public name: string;
  public constructor(name:string) {
    this.name = name;
  }
}
let lion = new Animal2('Jack');
console.log(lion.name); // Jack
lion.name = 'Tom';
console.log(lion.name); // Tom

// private
class Animal3 {
  private name:string;
  public constructor(name:string) {
    this.name = name;
  }
}
let lion3 = new Animal3('Jack3');
// console.log(lion3.name); // 属性“name”为私有属性，只能在类“Animal3”中访问

class Cat extends Animal3 {
  showName() {
    // console.log(this.name); // 属性“name”为私有属性，只能在类“Animal3”中访问
  }
}
 
// protected:
class Greeter {
  protected name = 'jackprotected'
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "hi";
  }
}
 
class SpecialGreeter extends Greeter {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + this.getName());
  }
  showName() {
    console.log(this.name)
  }
}
const g = new SpecialGreeter();
g.showName() // jackprotected
g.greet(); // Hello, hi
// g.getName(); // 属性“getName”受保护，只能在类“Greeter”及其子类中访问