const obj = {
    name: 'why',
    age: 18
}

function createObject1(o) {
    let newObj = {}
    Object.setPrototypeOf(newObj,o)
    return newObj
}

function createObject2(o) {
    let newObj = {}
    function Fn() {}
    Fn.prototype = o
    newObj = new Fn()
    return newObj
}


const info = createObject1(obj)
console.log(info);
console.log(info.__proto__);

const info2 = createObject1(obj)
console.log(info2);
console.log(info2.__proto__);

// 最新ECM编写  利用Object.create 函数 局限于对象上的继承
const info3 = Object.create(obj)
console.log(info3)
console.log(info3.__proto__)