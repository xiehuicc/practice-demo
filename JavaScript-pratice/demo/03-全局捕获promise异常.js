async function fn() {
  await new Promise((resolve, reject) => { 
    reject(new Error('报错'));
    console.log('后续代码仍可以执行');
  });
  }
  fn();
  
if(typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', function (event) {  // 浏览器环境 
    console.log('event', event);
    console.log('message', event.reason);
    console.log('message', event.promise);
    event.preventDefault()
  });
} else {
  process.on('rejectionHandled ', function (reason,promise) { // node环境 全局未捕获异常
    console.log('sssssssssss');
    console.log('reason', reason);
    console.log('message', promise);
  });
}