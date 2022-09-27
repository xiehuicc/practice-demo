/* 
  类型断言（Type Assertion）可以用来手动指定一个值类型
  类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的。


  语法：
  <类型>值;
  或
  值 as 类型
*/

// 将一个联合类型指定为一个更加具体的类型
function getLength(something: string | number): number {
  // 此时可以使用类型断言，将 something 断言成 string：
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}
