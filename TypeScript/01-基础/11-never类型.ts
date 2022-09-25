/* 
  never 类型表示那些永远不存在的值的类型
  void表示没有任何类型
  never 类型同时也是TypeScript中的底层类型， 下列是一些自然被分配的例子
  - 一个从来不会有返回值的函数(如：函数含有while(true))
  - 一个总是抛出错误的函数
*/

function infiniteloop(): never {
  while(true) {}
}

function error(message: string): never {
  throw Error('message')
}

