/* 
  类型保护（Type Guards）
  就是一些表达式，会在运行时检查以确保在某个作用域内的类型。
*/

// 1.typeof 类型保护
//  typeof 类型保护用于判断变量属于那种原始类型,typename 必须为 number、string、boolean 、symbol、object、function或undefined 类型
function fn(params:string| number) {
  if(typeof params === "number") {
    console.log("number:",params)
  }
  if(typeof params === "string") {
    console.log("string:",params)
  }
}

// 2.instanceof 类型保护（见 05-联合类型和类型保护）
//  instanceof类型保护和 typeof 类型保护用法相似，它主要用于判断是否是一个类的对象或继承对象的。

// 3. 自定义类型保护
interface RequestParams {
  url: string;
  onSuccess?: () => void;
  onFailed?: () => void;
}
function isValidRequestParams(request: any): request is RequestParams {
  return request && request.url;
}
let request ={url:'http://localhost:8080',onSuccess: () =>{},onFailed: ()=>{}}
// 检测客户端发送过来的参数
if (isValidRequestParams(request)) {
  request.url;
}
console.log(isValidRequestParams(request)) //http://localhost:8080

//这里面通过判断，我们需要手动告诉编译器通过 isValidRequestParams 的判断则 request 就是 RequestParams 类型的参数，
// 编译器通过类型谓词 parameterName is Type 得知，isValidRequestParams 返回了 true 则 request 就是 RequestParams 类型。