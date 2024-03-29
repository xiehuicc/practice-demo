const http = require('http')
const zlib = require('zlib')

const responseText = 'hello world'

const server = http.createServer(function(req,res) {
  const acceptEncoding = req.headers['accept-encoding']
  console.log(acceptEncoding)
  if(acceptEncoding.indexOf('gzip') !== -1) {
    res.writeHead(200, {
      'content-encoding': 'gzip'
    })
    console.log('zlib after', zlib.gzipSync(responseText))
    res.end(zlib.gzipSync(responseText) );
  } else {
    res.end('ni hao')
  }
})

server.listen('3004',()=> {
  console.log('server is listening on port 3004!');
})