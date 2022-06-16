
// 导出的三种方式
// 方式一：
// export let name = 'curry'
// export let age = 32
 const name = 'curry'
 const age = 32
// 方式二：{}中统一导出
// {}大括号，但不是一个对象
// {放置需要导出的变量的引用列表}
export {
  name,
  age
}
// 方式三：{}导出时，可以给变量取别名
// export {
//   name as fName,
//   age as fAge
// }