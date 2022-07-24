function foo () {
  console.log(this)
}

foo() // windows

var obj = {
  name : 'kobe',
  bar: foo
}

obj.bar() // obj

obj.bar.apply() // windows
obj.bar.apply(obj) // obj
obj.bar.apply("aaa") // aaa
