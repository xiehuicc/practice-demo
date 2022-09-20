const promise = new Promise((resolve, reject) =>{
    resolve('123')
})

// then 方法可以有返回值,它的返回值是promise
// 如果返回的是普通值，那么这个普通值会作为一个新的promise的resolve值
promise.then(res => {
    console.log('res1',res); // 没有返回时，会return undefined
    return 'aaa'    // new Promise ((resolve, reject) =>{resolve('aaa')}); 实际上会创建一个promise对象
}).then(res => {
    console.log('res2',res); // undefined
})

// 如果返回值是一个promise
promise.then(res => {
    return new Promise((resolve, reject) =>{
        resolve('hello world')
    })
}).then(res => {
    console.log('res3',res); // hello world
})

// 如果返回值是一个对象,并且该对象实现了thenable
promise.then(res => {
    return {
        then: function(resolve,reject) {
            resolve(2222)
        }
    }
}).then(res => {
    console.log('res4',res)
})