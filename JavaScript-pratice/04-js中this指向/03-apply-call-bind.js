function foo () {
  console.log(this);
}

var obj = {
  name: 'james',
  bar: foo
}

foo.apply(obj) // this指向 obj

function sum (a,b) {
  console.log(a +b,this)
}

// call和apply的区别，传参的方式不同
sum.call('call', 10, 20)
sum.apply('apply',[10,20])

// apply和call在执行函数时，可以明确的绑定this，也称为显示绑定

// 默认绑定和显示绑定bind冲突：优先级（显示绑定）
var  newFoo = foo.bind('aaad')  // 会返回一个函数
newFoo()