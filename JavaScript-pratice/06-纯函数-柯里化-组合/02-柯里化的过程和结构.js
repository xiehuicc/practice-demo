function add(x,y,z) {
    return x+y+z
}

const result = add(10,20,30)
console.log(result);


// 柯里化
function sum(x) {
    return function(y) {
        return function(z) {
            return x+y+z
        }
    }
}
console.log(sum(10)(20)(30))
// 简化柯里化的代码

var sum2 = x => y=> z=> {
    return x + y + z
}

console.log(sum2(10)(20)(30))