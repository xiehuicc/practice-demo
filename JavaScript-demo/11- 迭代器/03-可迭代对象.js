
// 创建一个可迭代对象
const iteratorObj = {
  names: ['a', 'b', 'c'],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => { // 要写成箭头函数，才能访问到names
        if(index < this.names.length) {
          return {value: this.names[index++], done:false}
        } else {
          return {value: undefined, done: true}
        }
      }
    }
  }
}

console.log(iteratorObj[Symbol.iterator])
const iterator = iteratorObj[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// for ... of  必须遍历可迭代对象

for(item of iteratorObj) {
  console.log(item)
}