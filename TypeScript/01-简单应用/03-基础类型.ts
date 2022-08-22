// 基础类型 null, underfiend, symbool, boolean, void...
const countOne: number = 123
const teacherName: string = 'Dell'

// 对象类型
const teacher: {
    name: string,
    age: number
} = {
    name: 'kobe',
    age: 33
}
class person {
   
}

const numbers: number[] = [1,2,3]

const kobe: person = new person()

// 返回值为number
const getTotal: () => number = () => {
    return 123
}
console.log(teacher)
console.log(numbers)
console.log(getTotal())

//identity function is generic(泛型)，因为它适用于多种类型  Unlike using any
function identity<Type> (arg: Type) {
    return arg
}

let outputString = identity<string>('hello world')
let outputNumber = identity<number>(123)
console.log(outputString,outputNumber)