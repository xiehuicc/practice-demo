/* 
类型推论：
  如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）（又称类型推断、类型判断）的规则推断出一个类型。
*/

let num = 'seven';
// num = 7;   // index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.