// 一：默认绑定
function test1() {
    console.log(this); // window
    test2();
  }
  
  function test2() {
    console.log(this); // window
    test3()
  }
  
  function test3() {
    console.log(this); // window
  }
  test1();
// 二: 显示绑定

// 三: 隐式绑定
var obj = {
    name: 'obj',
    foo: function() {
        console.log(this);
    }
}

obj.foo()  // obj

var fn = obj.foo
fn() // window