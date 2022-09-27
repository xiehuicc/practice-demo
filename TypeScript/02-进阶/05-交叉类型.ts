/* 
  交叉类型(交集类型)（intersection Types） 是将多个类型叠加合并组成新的类型，新类型包含了所被合并的所有属性。
  交叉类型的使用场景：Mixins、不适合用类来定义的场景
*/

// 例如，下述代码显示了交叉类型 Foo & Bar 同时具备 Foo 和 Bar 两种类型的成员，就是说这个类型的对象同时拥有了这两种类型的成员。
interface Foo {
  name: string;
  age: number;
  sayName: (name: string) => void;
}
interface Bar {
  name: string;
  gender: number;
  sayGender: (gender: string) => void;
}
let Tom1: Foo & Bar;
Tom1 = {
  name: 'kobe',
  age: 18,
  sayName: (name: string) => {},
  gender: 0,
  sayGender:(gender: string) => {}
}
console.log(Tom1.age);
console.log(Tom1.gender);

// 例二：
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
 
type ColorfulCircle = Colorful & Circle;

function draw(circle: ColorfulCircle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}
 
// okay
draw({ color: "blue", radius: 42 });