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

const names = ['abc', 'def', 'nba']
// 1. 扩展运算符
const newNames = [...names, ...iteratorObj]
console.log(newNames) // [ 'abc', 'def', 'nba', 'a', 'b', 'c' ]

const obj = {
  name: 'why',
  age: 18
}
// ES9中新增特性，而不是用的迭代器
const newObj = { ...obj }
console.log(newObj)

// 2. 解构语法
const [name1, name2] = names
console.log(name1,name2)

// 3. 创建一个其他对象时
const set = new Set(iteratorObj)
console.log(set)
// const set1 = new Set(123) // number 123 is not iterable 需要传入可迭代对象

const arr1 = Array.from(iteratorObj)
console.log(arr1) // [ 'a', 'b', 'c' ]

// 4. promise.all
Promise.all(iteratorObj).then(res => {
  console.log('promise',res) // [ 'a', 'b', 'c' ]
})