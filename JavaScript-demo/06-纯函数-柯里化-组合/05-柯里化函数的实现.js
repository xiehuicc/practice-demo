// 没太懂柯里化函数的实现


var add1 =  function (x,y,z) {
    return x+y+z
}

function hyCurrying(fn) {
    function curried(...args) {
        // fn.apply(this,args)
        if(args.length >= fn.length) {
            // 将传入的this指向fn
            return fn.apply(this,args)
        }else {
            // 没有达到个数时，需要返回一个新函数，继续接收参数
            function curried2(...args2) {
                // console.log('-----',[...args,...args2])
                return curried.apply(this,args.concat(args2))
            }
            return curried2
        }
    }
    return curried
}

const curryAdd = hyCurrying(add1)
console.log('11111',curryAdd(10)(20)(30))
console.log('2222222',curryAdd(10,20)(30))
console.log('3333333',curryAdd(10,20,30))