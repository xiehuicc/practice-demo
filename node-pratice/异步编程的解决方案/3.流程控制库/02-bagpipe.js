/**
 * 朴灵大大的bagpipe
 基本思路：

  1.通过队列来控制并发量。
  2.如果当前队列活跃（调用发起但未执行回调）的异步调用量小于限定值，从队列中取出执行。
  3.如果活跃调用达到限定值，调用暂时存放在队列中。
  4.每个异步调用结束时，从队列中取出新的异步调用执行。
 */

const Bagpipe = require('bagpipe');
const fs = require('fs');

// 设置最大并发数,拒绝模式为true,3s超时时间
let bagpipe = new Bagpipe(2,{refuse:true,timeout:3000});

const files = fs.readdirSync('../../Stream')
console.log(files)
for(let i = 0; i < files.length; i++) {
  bagpipe.push(fs.readFile, files[i], 'utf-8', function (err, data) {
    console.log('data===', data)
  });
}
bagpipe.on('full', function(length) {
  console.warn('底层系统处理不能及时完成，队列拥堵，目前队列长度为：' + length);
})