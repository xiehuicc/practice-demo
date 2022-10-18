const dns = require('dns')

dns.lookup('www.qq.com', function(err, address, family) {
  if(err) throw err;
  console.log('example A is:', address)
})

// 同一个域名，可能对应多个不同的ip。那么，如何获取一个域名对应的多个ip呢？可以这样。
const options = {all: true};

dns.lookup('www.qq.com', options, function(err,address,family) {
  if(err) throw err;
  console.log('example B is:', address)
})