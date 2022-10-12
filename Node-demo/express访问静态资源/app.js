const express = require('express')
const path  = require('path')

const app = express()
const router = express.Router()

app.use(router)
app.use(express.static('public')) // 设置静态资源访问路径
// 访问public 下的资源 http://127.0.0.1:3000/1.jpg

router.get('/',(req,res) => {
  res.send('hello world')
})


app.listen(3000,() => {
  console.log('listening on port 3000!')
})