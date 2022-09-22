const Bagpipe = require('bagpipe');
const fs = require('fs');

// 设置最大并发数,拒绝模式为true,3s超时时间
let bagpipe = new Bagpipe(10,{refuse:true,timeout:3000});

const files = fs.readdirSync('../../Stream')
console.log(files)
for(let i = 0; i < 100; i++) {
  bagpipe.push(fs.readFile, files[i], 'utf-8', function (err, data) {
    console.log('data===', data)
  });
}
bagpipe.on('full', function(length) {
  console.warn('底层系统处理不能及时完成，队列拥堵，目前队列长度为：' + length);
})e