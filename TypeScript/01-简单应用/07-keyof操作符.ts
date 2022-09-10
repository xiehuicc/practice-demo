// The following type P is the same type as “x” | “y”:
type Point = {x: number, y: number}
type p = keyof Point

interface Person {
  name: string;
  age: number;
  gender: string;
}
class Teacher {
  constructor(private info: Person) {}
  getInfo(key:string) {
    if(key == "name" || key == "age" || key == "gender") {
      return this.info[key];
    }
  }
  /* 
    * 也可以通过泛型实现
    * keyof 循环Person中的key
    * T extentd 'name' <==> type T = 'name
    * T extend 'age' <==> type T = 'age'
    * ...
  */
  getInfo2<T extends keyof Person>(key: T): Person[T] {
      return this.info[key];
  }
}

const teacher = new Teacher({
  name: "Teacher",
  age: 18,
  gender: "Female",
});

const test = teacher.getInfo('name'); // test ts类型分析出可能的类型为：const test: string | number | undefined
const test2 = teacher.getInfo2('name') // test2  ts类型分析可能出现的类型为：const test2: string
// const test3 = teacher.getInfo2('hello') // 类型“"hello"”的参数不能赋给类型“keyof Person”的参数
console.log('test:',test)
console.log('test2:',test2)