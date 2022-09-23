/* 
  枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。
  - 两种类型：
  1. 常数项(constant member)
  2. 计算所得项(computed member)
*/

// 常数项
enum Days { Sun, Mon, Tue, Wed, Thus, Fri, Sat }

console.log(Days[0]) // Sun

console.log(Days['Sun'] === 0) //true
console.log(Days['Mon'] === 1) // true

// 手动赋值
enum Daysdemo1 { Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat }
console.log('Sun',Daysdemo1['Sun']) // 3
console.log(Daysdemo1['Tue'] === 2); // true
console.log(Daysdemo1['Wed'] === 3) // true
// 注意，最好不要出现这种覆盖的情况。
console.log('Daysdemo1[3]',Daysdemo1[3]) //Wed


// 计算所得项

// 计算所得项后面不能跟未手动赋值的项，否则会报错
enum Color { Read, Green, Blue = 'blue'.length }
console.log('blue:',Color.Blue)