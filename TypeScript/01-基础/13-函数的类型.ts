// 1.函数表达式
// 如果要我们现在写一个对函数表达式（Function Expression）的定义，可能会写成这样：
let mysum = function(x:number, y:number): number {
  return x + y
}

// 虽然可以，但等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 mySum 添加类型，应该
let mysum2: (x:number, y: number) => number = function(x:number, y: number):number {
  return x + y
}
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型

// 2.用接口定义函数的形状
interface searchFunc{
  (source: string, subString: string): boolean;
}

let mySearch: searchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}
console.log(mySearch('ab','b'))

// 3. 可选参数 
// 使用? 表示可选参数，需要注意的是，可选参数必须接在必需参数后面；可选参数后不允许出现必须参数。
function buildName(firstName: string, lastName?: string) {
  if(lastName) {
    return firstName + '' + lastName
  }
  return firstName;
}

let tomcat = buildName('TOM','CAT')
let tom = buildName('TOM')
console.log('tomcat:',tomcat,'tom:',tom)

// 4. 参数默认值
function buildName2(firstName: string, lastName: string = 'Cat') {
  return firstName + ' ' + lastName;
}
let tomcat2 = buildName2('Tom', 'Cat');
let tom2 = buildName2('Tom');
console.log('tomcat:',tomcat2,'tom:',tom2)

// 5. 剩余参数
// items 是一个数组。所以我们可以用数组的类型来定义它
function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
    array.push(item);
  });
}
// let a = [];
// push(a, 1, 2, 3);

// 6. 重载
// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理

// 如何精确的表达:输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。
// 我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | undefined{
  if (typeof x === 'number') {
    return Number(
      x
        .toString()
        .split('')
        .reverse()
        .join('')
    );
  } else if (typeof x === 'string') {
    return x
      .split('')
      .reverse()
      .join('');
  }
}

console.log('reverse:',reverse(123))
console.log('reverse:',reverse('abc'))
