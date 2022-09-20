/* 
  * 可以迭代数组（不同类型的数组元素）的迭代器
*/

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
const nums = [1, 2, 3, 4, 5, 6, 7]

const namesIterator = createArrayIterator(names)
const numsIterator = createArrayIterator(nums)
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())

console.log(numsIterator.next())
console.log(numsIterator.next())
console.log(numsIterator.next())
console.log(numsIterator.next())
console.log(numsIterator.next())
console.log(numsIterator.next())
// 创建一个无限的迭代器 ==> done不为true