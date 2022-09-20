 function hello() {
  return new Promise( function (resolve,reject) {
    let result 
    result =  timeOut()
    console.log('result',result)
    // result = 'aaa'
    resolve(result)
    })
}

function loo() {
    let result 
    result =  timeOut(2000)
    console.log('result',result)
    result = 'aaa'
    return result
}

function timeOut(ms) {
    return new Promise((resolve,reject) => {
        // setTimeout(resolve,ms, 'done');
        // throw new Error('Async Error')
        resolve({m: '123'})
    });
}

// console.log(loo())
hello().then(res => {
    console.log(res)
    // console.log('mmm',res.m)
}).catch()
// console.log(loo())
hello().then(res => {
    console.log(res)
    // console.log('mmm',res.m)
}).catch()


// try {
//     timeOut()
//     setTimeout(() => {
//         console.log(222222222)
//     })
//     hello().then(res => {
//         console.log('res====',res)
//     }).catch()
// } catch (error) {
// } finally{
   

// }

function foo () {
    // console.log('fpoo')
    // return 'fpoo'
    this.m = '33'
    return 'fpoo'
}

const fooObj = new foo()
console.log(fooObj)