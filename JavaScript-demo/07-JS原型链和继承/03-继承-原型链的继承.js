function Person() {
    this.name = 'why',
    this.friends = []
}

function Student() {
    this.sno = 111
}

// 会创建一个person对象，Student的原型是Person对象
Student.prototype = new Person()

// 在Person对象上加上一个studying函数
Student.prototype.studying = function() {
    console.log(this.name + 'studying ing ~')
}

Student.prototype.eating = function() {
    console.log(this.name +'eating ing ~')
}

// stu对象的原型是Person，因为Student对象的原型是Person
const stu = new Student()

console.log(stu)
stu.eating()


// 原型链实现继承的弊端：
// 弊端一：1. 打印stu对象，继承的属性是看不到的
// console.log(stu)

// 2. 创建出来两个stu的对象
const sut1 = new Student()
const stu2 = new Student()

// 修改stu1的name时，stu2的name不会被修改，因为stu1会创建一个name属性并赋值，并不会对原型上的name属性进行修改
sut1.name = 'kobe'
console.log(stu2.name)//why

//弊端二： 获取引用，修改引用中的值，会相互影响
sut1.friends.push("James")
console.log(sut1.friends)// [ 'James' ]
console.log(stu2.friends)// [ 'James' ]

// 弊端三：在前面实现的类的过程中没有传递参数
const stu3 = new Student('lilei',112)
console.log(stu3.name) // why
