const obj = {
    name: 'why',
    age: 18
}

Object.keys(obj).forEach(key => {
    let value = obj[key]
    Object.defineProperty(obj,key, {
        set: function(newValue) {
            console.log(`监听到给${key}设置值`);
            value = newValue
        },
        get: function() {
            console.log(`监听到给${key}获取值`)
            return value
        }
    })
})

obj.name = 'kobe'
obj.age = 33
console.log(obj.name)
console.log(obj.age)

// Object.defineProperty 缺点：
// Object.defineProperty设计的初衷并不是监听一个对象中的所有属性的
// 我们想监听更丰富的操作，比如新增属性，删除属性，那么Object.defineProperty是无能为力的