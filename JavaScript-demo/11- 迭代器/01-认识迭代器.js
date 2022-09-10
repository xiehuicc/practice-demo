// 创建一个迭代器对象来访问 数组

const names = ['abc', 'def', 'nba']
let index = 0
const namesItrator = {
  next: function() {
    if(index <= names.length) {
      return {value:names[index++],done:false}
    } else {
      return {value: undefined,done: true}
    }
  }
}

console.log(namesItrator.next())
console.log(namesItrator.next())
console.log(namesItrator.next())
console.log(namesItrator.next())