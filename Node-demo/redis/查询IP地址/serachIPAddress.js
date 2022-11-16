const fs = require('fs');
const csvParser  = require('csv').parse; 
const redis = require('redis')
const readline = require('readline');

const client = redis.createClient(6379,'127.0.0.1',{})

// 用node-csv-parser模块6加载该csv文件：
fs.createReadStream('ip.csv').pipe(csvParser())
    .on('data', importIP)

// 将IP地址数据加入Redis
// 输入格式："['上海', '202.127.0.0', '202.127.4.255']"
function importIP(data) { 
  const location = data[0]
  console.log('data ===', data);
  const minIP = convertIPtoNumber(data[1]).toString()
  const maxIP = convertIPtoNumber(data[2]).toString()
  console.log('ip',minIP, '*' + location, maxIP, location)
  // 将数据加到有序集合中，键名为'ip'
  // redis 4版本这种方式会报错， Cannot read property 'toString' of undefined
  client.zadd('ip',minIP, '*'+ location, maxIP, location)
} 

// 将IP地址转换成十进制数字
// convertIPtoNumber('127.0.0.1') => 2130706433
function convertIPtoNumber(ip) {
  let result = '';
  ip.split('.').forEach(function (item) {
    item = ~~item;
    item = item.toString(2);
    item = pad(item, 8);
    result += item;
   });
   return parseInt(result, 2);
  }
// pad函数用于将二进制数补全为8位：
// 在字符串前补'0'。
// pad('11', 3) => '011'
function pad(num, n) {
  let len = num.length
  while(len < n) {
    num = '0' + num
    len ++
  }
  return num
}

// 现在我们提供一个接口来供用户查询：
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.setPrompt('IP>')
rl.prompt()

rl.on('line', function(line) {
  let ip = convertIPtoNumber(line)
  client.zrangebyscore('ip', ip, '+inf', 'LIMIT', '0', '1', function(err,result){
    console.log(result)
    if(!Array.isArray(result) || result.length === 0) {
      // 改IP地址，超出了数据库记录的最大地址
      console.log('No data');
    } else {
      const location = result[0]
      console.log('location is',location)
      if(location[0] === '*') {
        // 该Ip地址不属于任何一个IP网段
        console.log('No data');
      } else {
        console.log(location)
      }
    }
    rl.prompt()
  })
})