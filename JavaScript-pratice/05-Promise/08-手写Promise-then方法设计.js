const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class HYPromise {
    constructor (executor) {
        this.status = PROMISE_STATUS_PENDING
        this.value = undefined
        this.reason = undefined
        
        const resolve = (value) => {
            if(this.status === PROMISE_STATUS_PENDING) {
                // 为了让then方法在这之前完成执行，将下列函数加入到延时队列中
                queueMicrotask(() =>{
                    this.status = PROMISE_STATUS_FULFILLED
                    this.value = value
                    console.log('resolve被调用')
                    this.onfulfilled(this.value)
                })
            }
        }

        const reject = (reason) => {
            if(this.status === PROMISE_STATUS_PENDING) {
                queueMicrotask(() => {
                    this.status = PROMISE_STATUS_REJECTED
                    this.reason = reason
                    console.log('reject被调用')
                    this.onrejected(this.reason)
                })
            }
        }

        executor(resolve, reject)
    }
    then (onFulfilled, onRejected) {
        this.onfulfilled = onFulfilled
        this.onrejected = onRejected
    }
}

const promise = new HYPromise((resolve,reject)=> {
    console.log('状态pending')
    // resolve('111')
    reject('222')
})

promise.then(res => {
    console.log('res :',res)
},err=> {
    console.log('err:',err)
})

