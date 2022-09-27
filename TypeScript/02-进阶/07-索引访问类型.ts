/* 
  索引访问类型（Indexed access Types）的使用让编译器能够检查使用了动态属性名的类型。
*/

// 我们可以使用索引访问类型来查找另一种类型的特定属性
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"]; // type Age = number
let a: Age
console.log(a=1)

// 索引类型本身就是一种类型，因此我们可以完全使用 union、keyof 或其他类型：
type I1 = Person["age" | "name"]; // type I1 = string | number
 
type I2 = Person[keyof Person]; // type I2 = string | number | boolean
     
 
type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName]; // type I3 = string | boolean

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];
 
type Person1 = typeof MyArray[number]; // type Person1 = { name: string;age: number;}
type Age1 = typeof MyArray[number]["age"]; // type Age1 = number
type Age2 = Person["age"]; // type Age2 = number

// 您只能在索引时使用类型，这意味着您不能使用 const 来进行变量引用：
const key = "age";
type Age3 = Person[key];

type key = "age";
type Age4 = Person[key] // type Age4 = number