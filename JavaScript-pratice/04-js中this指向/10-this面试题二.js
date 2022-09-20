var name = 'window'
var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    return () => {
      console.log(this.name)
    }
  }
}

var person2 = { name: 'person2' }

person1.foo1();  // person1
person1.foo1.call(person2);  // person1 

person1.foo2(); // window  (对象不绑定作用域，上层作用域是全局)
person1.foo2.call(person2); // window

person1.foo3()(); // window  （独立函数调用）
person1.foo3.call(person2)();  // person2不对，为window  foo3的上层作用域是person2，但是（）是拿到函数返回值后进行调用，还是函数独立调用
person1.foo3().call(person2); // window不对，应为person2  （最终调用函数时，使用的是显示绑定）

person1.foo4()(); // person1 foo4是一个箭头函数，调用的时候找上层作用域 foo4，foo4绑定的是person1
person1.foo4.call(person2)(); // person2
person1.foo4().call(person2); // person1  person1.foo4() this指向person1，call(person2)--》找上层作用域 为person1