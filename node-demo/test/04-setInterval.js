const intervalTest1 = setInterval(() => {
    console.log('setInterval running 1');
},1000)

// 采用此方式做轮询，可以避免setInterval因定时器未清除 导致定时器累计 页面崩溃
const intervalTest2 = setInterval(() => {
   setTimeout(() => { console.log('setInterval running 2')},0) // setTimeout 结束会自动清除定时器
},1000)

// clearInterval(intervalTest1)
// blog.csdn.net 帖子