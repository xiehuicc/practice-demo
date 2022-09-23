
/* 实现两个参数都必须传入是同类型 */
function join<Type>(first: Type, second: Type) {
  return `${first}${second}`;
}

function join2<T, P>(first: T, second: P) {
  return `${first}${second}`;
}

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