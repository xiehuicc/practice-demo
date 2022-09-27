/* 
  条件类型（conditional Types）用来表达非均匀映射类型
  T extends U ? X : Y
*/



declare function fn<T extends boolean>(x: T): T extends true ? string : number;
// x 的类型为 string | number
// let x = fn<boolean>(Math.random() < 0.5);
// console.log(x);

interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}
 
type Example1 = Dog extends Animal ? number : string; // type Example1 = number
        


type Example2 = RegExp extends Animal ? number : string; // type Example2 = string

