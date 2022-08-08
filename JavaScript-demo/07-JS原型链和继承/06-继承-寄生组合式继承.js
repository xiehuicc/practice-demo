
// 封装 原型对象的继承
function inheritProtoType(subType,superType) {
    subType.prototype = Object.create(superType.prototype)
    Object.defineProperty(subType.prototype, "constructor", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: subType
    })
}



function Person(name,age,friends) {
    this.name = name;
    this.age = age;
    this.friends = friends;
}

Person.prototype.eating = function () {
    console.log('eating');
}

Person.prototype.running = function () {
    console.log('running');
}

function Student(name,age,friends,sno,score) {
    Person.call(this,name,age,friends)
    this.sno = sno
    this.score = score
}

// 直接调用封装的
// inheritProtoType(Student,Person)

// 创建出来一个新对象，新对象的原型是指向Person的，再将它赋值给Student
Student.prototype = Object.create(Person.prototype)

// 添加constructor, 此时打印为Student constructor
Object.defineProperty(Student.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: Student
})

Student.prototype.studying = function() {
    console.log('studying~');
}


const stu = new Student('why',18,["kobe"],111,100)
console.log(stu) // 打印Person 是因为新创建出来的Student对象上面没有constructor，stu.constructor上没有--》Student上没有——》继续往上找，Person上有
// Person {
//     name: 'why',
//     age: 18,
//     friends: [ 'kobe' ],
//     sno: 111,
//     score: 100
//   }