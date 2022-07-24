// 通过关键字new 调用一个函数时（构造器），这个时候this是在调用这个构造器时创建出来的 对象
// this = 创建出来的 对象
// 这个绑定过程就是new 绑定

function person (name,age) {
  this.name = name
  this.age = age
}

var p1= new person('why','18')
console.log(p1.name,p1.age)

var p2 = new person('kobe','38')
console.log(p2.name,p2.age)