const http = require('http')
const fs = require('fs')
const axios = require('axios')

// http.createServer(function(req, res) {
 
// }).listen(3001)

axios.get('http://img1.juimg.com/180409/355843-1P4091T3219.jpg').then(req =>{
  console.log(req)
  const writerStream = fs.createWriteStream('./Img/hello11.png')
  req.pipe(writerStream)
  req.on('end', function() {
    console.log('pic saved end')
  })
  writerStream.on('error', function(err) {
    console.log('pic error',err)
  })
})
// axios.get('http://img1.juimg.com/180409/355843-1P4091T3219.jpg', function(req, res) {
//   console.log(req)
//   const writerStream = fs.createWriteStream('./Img/hello11.png')
//   req.pipe(writerStream)
//   req.on('end', function() {
//     console.log('pic saved end')
//   })
//   writerStream.on('error', function(err) {
//     console.log('pic error',err)
//   })
// })

// const request = require('request')

// request('http://www.chabeichong.com/images/2016/10/21-06155760.jpg',function(err,res,body) {
//   res.pipe(fs.createWriteStream('./Img/hi.png')).on('close',function() {
//     console.log('pic saved end')
//   })
// })
