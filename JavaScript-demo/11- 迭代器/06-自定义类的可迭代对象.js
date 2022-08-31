/* 
  * 案例： 创建一个classroom的类
  * 教室中有自己的位置，名称，当前教室的学生
  * 这个教室可以进来新学生(push)
  * 创建教室对象是可迭代的对象
*/

class Classroom {
  constructor(address,name, student) {
    this.address = address;
    this.name = name;
    this.student = student;
  }
  entry(newStudent) {
    this.student.push(newStudent);
  }
  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        if(index < this.student.length) {
          return {value: this.student[index++], done:false}
        } else {
          return {value: undefined, done: true}
        }
      },
      // 用于监听迭代器何时退出
      return: () => {
        console.log('迭代器提前终止了~');
        return {value: undefined, done: true}
      }
    }
  }

  // 用生成器替代迭代器
  // *[Symbol.iterator]() {
  //   yield* this.student
  // }
}

const classroom = new Classroom('上高二中','计算机教室', ['james','kobe','curry','lacus'])
classroom.entry('jorden')

const iterator = classroom[Symbol.iterator]()
console.log(iterator.next())

for(const stu of classroom) {
  console.log(stu)
  if(stu === 'lacus') break;
}

