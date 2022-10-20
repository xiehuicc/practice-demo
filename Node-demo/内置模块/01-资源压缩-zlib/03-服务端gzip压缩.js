/* 
  浏览器通过HTTP请求头部里加上Accept-Encoding，告诉服务器，“你可以用gzip，或者defalte算法压缩资源”。
  > Accept-Encoding:gzip, deflate 

  > 代码超级简单。首先判断 是否包含 accept-encoding 首部，且值为gzip。
  1.否：返回未压缩的文件。
  2.是：返回gzip压缩后的文件。
*/

const http = require('http');
const zlib = require('zlib');
const fs = require('fs');
const filepath = '../extra/fileForGzip.html'

const server = http.createServer(function(req, res) {
  const acceptEncoding = req.headers['accept-encoding'];
  console.log(acceptEncoding)
  let gzip;
  if(acceptEncoding.indexOf('gzip') !== -1) { // 判断是否需要gzip压缩
    gzip = zlib.createGzip()
     // 记得响应 Content-Encoding，告诉浏览器：文件被 gzip 压缩过
     res.writeHead(200, {
      'Content-Encoding': 'gzip'
    });
    fs.createReadStream(filepath).pipe(gzip).pipe(res)
  }else {
    fs.createReadStream(filepath).pipe(res)
  }
})

server.listen('3003',()=> {
  console.log('server is linstening on port: 3003');
})