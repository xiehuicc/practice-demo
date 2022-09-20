function Person() {

}

console.log(Person.prototype)
console.log(Object.getOwnPropertyDescriptor(Person.prototype))
console.log(Person.prototype.__proto__)
