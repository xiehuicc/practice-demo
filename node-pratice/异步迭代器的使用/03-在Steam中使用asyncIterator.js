const fs = require('fs');
const readable = fs.createReadStream('./hello.txt', {
  encoding: 'utf-8',
  highWaterMark: 1
});

async function readText(readable) {
  let data = '';
  for await (const chunk of readable) {
    data += chunk;
  }
  return data;
}
(async () => {
  try {
    const res = await readText(readable);
    console.log(res); // Hello Node.js
  } catch (err) {
    console.log(err.message);
  }
})();

// 以往当我们读取一个文件时，需要监听 data 事件，拼接数据，在 end 事件里判断完成，如下所示：
/* 
function readText(readable) {
  let data = '';
  return new Promise((resolve, reject) => {
    readable.on('data', chunk => {
      data += chunk;
    })
    readable.on('end', () => {
      resolve(data);
    });
    readable.on('error', err => {
      reject(err);
    });
  })
} */