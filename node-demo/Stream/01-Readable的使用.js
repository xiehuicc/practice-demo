const fs = require('fs')

// 不写编码 读取的是buffer字节
// 传统方式
fs.readFile('./foo.txt',{encoding:'utf-8'},(err,data)=> {
    console.log(data)
})

// 流的方式读取
const reader = fs.createReadStream('./foo.txt',{
    start: 3,
    end: 6,
    highWaterMark: 2
})

// 获取数据得通过监听“data”事件，
reader.on("data",data => {
    console.log('Stream',data)
    // 暂停读取文件
    reader.pause()
    setTimeout(() => {
        reader.resume()
    },1000)
} )

reader.on('open',() => {
    console.log('文件被打开')
})

reader.on('close',()=> {
    console.log('文件被关闭')
})