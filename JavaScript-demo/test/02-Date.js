/* 
  * node 环境中 Date 为UTC时间
*/

const date1 = new Date('2022-08-31T07:54:34.259Z')
const date2 = new Date('2022-08-31T07:54:34.259Z')
console.log(date1)
console.log(date2)
/* 
  *JS Date()对象， 当用小于或大于时，比较使用的是valueOf。当用等号比较时，不管是==还是===，比较的都是两个对象，两个对象当然不相等，相当于{}=={}输出false
*/
console.log(date1 === date2) // false
console.log({} === {}) // false 
console.log(JSON.stringify(date1) === JSON.stringify(date2)) //true
console.log(date2.getTime() === date1.getTime()) // true
console.log(String(date1) === String(date2)) // true