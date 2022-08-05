function sum1(x,y,z) {
    x= x +2
    y = y*2
    z = z +2
    return x + y + z
}

console.log('sum1',sum1(10,20,30))

// 柯里化
function sum2(x) {
    x= x +2
    return function (y) {
        y = y*2
        return function (z) {
            z = z +2
            return x + y + z
        }
    }
}

console.log('sum2',sum2(10)(20)(30))