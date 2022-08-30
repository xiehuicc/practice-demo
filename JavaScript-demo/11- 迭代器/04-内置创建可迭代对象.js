const names = ['abc','cba','dba']
const set = new Set()
// 函数中的arguments
function foo (x,y,z) {
  for (const arg of arguments) {
    console.log(arg)
  }
}
set.add(10)
set.add(30)
set.add(30)

console.log(names[Symbol.iterator])
console.log(set[Symbol.iterator])
foo(9,7,1)

