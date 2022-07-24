function foo () {
  var name = 'kobe';
  var age = '38';
  function bar () {
    console.log(name)
    console.log(age)
  }
  return bar
}

var fn = foo()
fn()