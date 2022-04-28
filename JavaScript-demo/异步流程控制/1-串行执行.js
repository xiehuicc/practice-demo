var items = [ 1, 2, 3, 4, 5, 6 ];
var results = [];

function async(arg, callback) {
  console.log('参数为 ' + arg +' , 1秒后返回结果');
  setTimeout(function () { callback(arg * 2); }, 1000);
}

function final(value) {
  console.log('完成: ', value);
}
// 串行函数 ，它会依次执行异步任务，所有任务都完成后，才会执行final函数
function series(item) {
  console.log('item',item)
  if(item) {
    async( item, function(result) {
      results.push(result);
      console.log(results)
      return series(items.shift());
    });
  } else {
    return final(results[results.length - 1]);
  }
}

// 弹出数组的第一个元素
series(items.shift());