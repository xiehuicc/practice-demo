/* 
  泛型（Generics）是指在定义函数，接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
*/

// 1. 多个类型参数

/* 实现两个参数都必须传入是同类型 */
function join<Type>(first: Type, second: Type) {
  return `${first}${second}`;
}

function join2<T, P>(first: T, second: P) {
  return `${first}${second}`;
}

// 2. 泛型约束
// 返回类型也要为T类型 : T
function join3<T, P>(first: T, second: P): T {
  return first;
}

// 传入的参数必须是数组  Array<Type>这种写法也行
function map<Type>(params: Type[]){
  return params;
}

const result_join1 = join<string>('a','2')
const result_join2 = join<number>(1,2)
const result_join3 = join2<string,number>('a',3)
const result_join4 = join2('c',4) // ts 会进行类型推断
console.log(result_join1)
console.log(result_join2)
console.log(result_join3)
console.log(result_join4)

const result_map = map<string>(['a'])
console.log(result_map)

// 3. 泛型接口
//可以使用接口的方式来定义一个函数需要符合的形状：
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}
let createArray: CreateArrayFunc;
createArray = function<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};

console.log('createArray',createArray<string>(3, 'x')); // ['x', 'x', 'x']