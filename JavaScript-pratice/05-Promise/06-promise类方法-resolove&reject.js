// 普通值
const promise1 = Promise.resolve({name: '123'})

promise1.then(res1 => {
    console.log('res1',res1)
})

// 传入的是promise
const promise2 = Promise.resolve(new Promise((resolve, reject) => {resolve({age: 24})}))

promise2.then(res => {
    console.log('res2',res)
})


// promise.reject 
const promise3 = Promise.reject('reject message')

promise3.then(res => {
    console.log('res3',res)
}).catch(err => {console.log('err:',err)})