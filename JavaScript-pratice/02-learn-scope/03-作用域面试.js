var a = 100

function foo () {
    console.log(a)
    return 
    var a = 200
}

foo()

// 查找的是foo 函数执行上下文内的AO中的属性，编译过程中 a：undefined
// undefined