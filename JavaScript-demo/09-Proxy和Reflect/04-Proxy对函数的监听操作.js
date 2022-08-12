function foo () {

}

const fooProxy = new Proxy(foo, {
    apply: function(target,thisArg,argArary) {
        console.log('对foo函数进行了apply调用')
        return target.apply(thisArg,argArary)
    },
    construct: function(target,argArary,newTarget) {
        console.log('对foo函数进行了new调用')
        return new target(...argArary)
    }
})

fooProxy.apply({},['abc','cba'])
new fooProxy('abc','cba')