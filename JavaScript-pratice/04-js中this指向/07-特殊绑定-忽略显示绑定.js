function foo () {
    console.log(this);
}

foo.apply('abc') // abc
foo.apply({}) // {}

// 忽略显示绑定
foo.apply(null)  // window
foo.apply(undefined)    // window

var bar = foo.bind(null)
bar()   // window