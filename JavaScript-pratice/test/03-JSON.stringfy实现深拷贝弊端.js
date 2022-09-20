// 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。 
const obj = {
  name: "loopObj"
};
const loopObj = {
  obj
};
// 对象之间形成循环引用，形成闭环
obj.loopObj = loopObj;

// 封装一个深拷贝的函数
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
// 执行深拷贝，抛出错误
deepClone(obj)
/**
 VM44:9 Uncaught TypeError: Converting circular structure to JSON
    --> starting at object with constructor 'Object'
    |     property 'loopObj' -> object with constructor 'Object'
    --- property 'obj' closes the circle
    at JSON.stringify (<anonymous>)
    at deepClone (<anonymous>:9:26)
    at <anonymous>:11:13
 */

/* 
  * 对象的key值转换
*/
const changeKey = ({ _id, created_at, updated_at, ...rest }) => ({ id: _id, createdAt: created_at, updatedAt: updated_at, ...rest })
const todayILearn = {
_id: 1,
content: '今天学习 JSON.stringify()，我很开心！',
created_at: 'Mon Nov 25 2019 14:03:55 GMT+0800 (中国标准时间)',
updated_at: 'Mon Nov 25 2019 16:03:55 GMT+0800 (中国标准时间)'
}
let obj1 = changeKey(todayILearn);
console.log(obj1)

/* 
  * JSON.stringfy() 实现
*/


const mapObj = {
  _id: "id",
  created_at: "createdAt",
  updated_at: "updatedAt"
};
const newObj = JSON.parse(
  JSON.stringify(todayILearn).replace(
    /_id|created_at|updated_at/gi,
    matched => mapObj[matched])
    )
console.log(newObj)
// { 
// id: 1,
//  content: '今天学习 JSON.stringify()，我很开心！',
//  createdAt: 'Mon Nov 25 2019 14:03:55 GMT+0800 (中国标准时间)',
//  updatedAt: 'Mon Nov 25 2019 16:03:55 GMT+0800 (中国标准时间)' 
// }