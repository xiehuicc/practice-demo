async function fn() {
  await new Promise((resolve, reject) => { 
    reject(new Error('报错')); 
  });
  }
  fn();
  
  window.addEventListener('unhandledrejection', function (event) {
  console.log('event', event);
  console.log('message', event.reason);
  console.log('message', event.promise);
  event.preventDefault()
  });