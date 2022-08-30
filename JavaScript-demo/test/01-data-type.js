/* 
  * Javascript types (8 种)
  * Boolean
  * Null
  * Undefined
  * Symbol
  * bigInt
  * string
  * Number
  * Object
*/

// BigInt type
let x = BigInt(Number.MAX_SAFE_INTEGER)
let y = BigInt(1324) //1324n
console.log(y === 1234) //false
console.log(y)
console.log(x)
x = x + 2n 
// x = x + 2 // // BigInt 不能与数字相互运算。否则，将抛出 TypeError。
console.log(x)