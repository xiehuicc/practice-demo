const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class HYPromise {
    constructor (executor) {
        this.status = PROMISE_STATUS_PENDING
        this.value = undefined
        this.reason = undefined
        this.onFulfilledFns = []
        this.onRejectedFns = []
        
        const resolve = (value) => {
            if(this.status === PROMISE_STATUS_PENDING) {
                // 添加微任务，为了让then方法在这之前完成执行，将下列函数加入到延时队列中
                queueMicrotask(() =>{
                    if(this.status !== PROMISE_STATUS_PENDING) return
                    this.status = PROMISE_STATUS_FULFILLED
                    this.value = value
                    this.onFulfilledFns.forEach(fn => {
                        fn(this.value)
                    })
                })
            }
        }

        const reject = (reason) => {
            if(this.status === PROMISE_STATUS_PENDING) {
                queueMicrotask(() => {
                    if(this.status !== PROMISE_STATUS_PENDING) return // 防止resolve()后调用reject()还能被执行，因为status状态改变是放在延时队列中处理的
                    this.status = PROMISE_STATUS_REJECTED
                    this.reason = reason
                    this.onRejectedFns.forEach(fn => {
                        fn(this.reason)
                    })
                })
            }
        }

        executor(resolve, reject)
    }
    then (onFulfilled, onRejected) {
        return new HYPromise((resolve, reject) => {
            // 1. 如果在进行then调用时，状态已经确定下来,直接返回
            if(this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
                try {
                    const value = onFulfilled(this.value)
                    resolve(value)
                } catch (error) {
                    reject(error)
                }
            }
            if(this.status === PROMISE_STATUS_REJECTED && onRejected) {
               try {
                    const reason = onRejected(this.reason)
                    console.log('resson ==',reason)
                    resolve(reason)
               } catch (error) {
                    reject(error)
               }
            }
            // 2. 将成功回调和失败回调放到数组中
            if(this.status === PROMISE_STATUS_PENDING && onFulfilled) {
                // this.onFulfilledFns.push(onFulfilled)
                this.onFulfilledFns.push(() => {
                    try {
                        const value = onFulfilled(this.value)
                        resolve(value)
                    } catch (error) {
                        reject(error)
                    }
                })
            }
            if(this.status === PROMISE_STATUS_PENDING && onRejected) {
                // this.onRejectedFns.push(onRejected)
                try {
                    const reason = onRejected(this.reason)
                    resolve(reason)
                } catch (error) {
                    reject(error)
                }
            }
        })
    }
    
}

const promise = new HYPromise((resolve,reject)=> {
    resolve('111')
    // reject('222')
})

// promise.then(res => {
//     console.log('res1 :',res)
// },err=> {
//     console.log('err1:',err)
// })

// // 链式调用实现：1.声明一个数组 2.将回调函数加入数组中 3. 在resolve/reject中遍历该数组
// promise.then(res => {
//     console.log('res2:',res)
// },err => {
//     console.log('err2:',err)
// })


// setTimeout(() => {
//     promise.then(res => {
//         console.log('res3:',res)
//     })
// })

// 调用then方法 多次调用
promise.then(res => {
    console.log('feedback1:',res)
    // return 'aaa'
    throw new Error('err message')
},err=> {
    console.log('error1:',err)
    return 'bbbb'
}).then(res => {
    console.log('feedback2:',res)
},err=>{
    console.log('error2:',err)
})