// 迭代器
function createArrayIterator(arr) {
  let index = 0;
  return {
    next: function () {
      if(index < arr.length) {
        return {done: false, value: arr[index++] };
      } else {
        return {done: true, value: undefined};
      }
    }
  }
}

const names = ['abc', 'def', 'nba']
const iterator = createArrayIterator(names)
console.log(iterator.next())

// 生成器替代迭代器
function* createArrayIterator2(arr) {
  // 第一种写法
  // for(const item of arr) {
  //   yield item
  // }
  /* 
    * 第二种写法
    * yield* 后面跟可迭代对象
    * 
  */
  yield* arr
}

const iterator2 = createArrayIterator2(names)
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())

// 创建一个函数，这个函数可以迭代一个范围内的数字
function* createRangeiterator(start, end) {
  let index = start
  while (index < end) {
    yield index++
  }
}

const iterator3 = createRangeiterator(10,20)
console.log(iterator3.next())
console.log(iterator3.next())
console.log(iterator3.next())
console.log(iterator3.next())