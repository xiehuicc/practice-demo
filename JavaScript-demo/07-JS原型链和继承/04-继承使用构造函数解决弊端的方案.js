function Person(name, age, friends) {
    this.name = name,
        this.age = age
    this.friends = friends
}

// 子类：特有属性和方法
function Student(name, age, friends, sno) {
    // 接用构造函数继承
    // this指向为Student函数
    Person.call(this, name, age, friends)
    this.sno = sno
}

Student.prototype = new Person()


Student.prototype.studying = function () {
    console.log(this.name + 'studying ing ~')
}

Student.prototype.eating = function () {
    console.log(this.name + 'eating ing ~')
}

const stu = new Student('why', 18, ['kobe'], 111)


// 借用构造函数也是存在弊端
// 1.弊端一:Person函数至少被调用两次
// 2.弊端二：stu原型对象上会多出一些属性，但是这些属性是没必要存在的

// 借用构造函数已经解决的弊端；

// 2. 创建出来两个stu的对象
let student1 = new Student('hw', 32, ['bbb'], 111)
let stu2 = new Student('kobe', 32, ['james'], 222)
console.log(student1);

student1.name = 'kobe'
console.log(stu2.name)

student1.friends.push("James")
console.log(student1.friends) // [ 'bbb', 'James' ]
console.log(student1.friends) // [ 'bbb', 'James' ]

// 三
const stu3 = new Student('lilei', 112)
console.log(stu3.name) // lilei