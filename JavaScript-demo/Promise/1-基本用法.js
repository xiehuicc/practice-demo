function timeOut(ms) {
    return new Promise((resolve,reject) => {
        setTimeout(resolve,ms, 'done');
    });
}

timeOut(2000).then((value) => {
    console.log(value)
})

// timeout方法返回一个Promise实例，表示一段时间以后才会发生的结果。
// 过了指定的时间（ms参数）以后，Promise实例的状态变为resolved，就会触发then方法绑定的回调函数。