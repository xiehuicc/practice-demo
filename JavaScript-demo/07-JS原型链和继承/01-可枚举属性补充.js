const obj = {
    name: 'why',
    age: 18
}

// 默认时不可枚举的属性
Object.defineProperties(obj,{
    "adress" :{
        value: "上海市"
    }
})
console.log(obj.address) // undefined
console.log(obj.hasOwnProperty('address')) // false
console.log(obj);