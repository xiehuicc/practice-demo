function Student (name, age) {
    this.name = name
    this.age = age
}

function Teacher () {

}

const stu = new Student('why', 18)
console.log(stu)
console.log(stu.__proto__ === Student.prototype) // true

// 执行Student中的内容，但是创建出来的对象是Teacher对象
const teacher = Reflect.construct(Student,['kobe',34],Teacher)
console.log(teacher)
console.log(teacher.__proto__ === Teacher.prototype)
