
// 立即调用函数(IIFE)
var moduleFoo = (function () {

  var name = "why"
  var age = 12;
  console.log(name)
  return {
    name,
    age
  }
}) ()

