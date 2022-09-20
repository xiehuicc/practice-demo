const http = require('http')

http.get('http://localhost:8000',(res) =>{
    res.on('data',(data) => {
        console.log(data.toString())
    })
})

const req = http.request({
    method: 'POST',
    hostname: 'localhost',
    port: 8000
},(res) => {
    res.on('data',data => {
        console.log(data.toString())
    })
    res.on('end',()=> {
        console.log('请求完成end');
    })
})

// end 必须调用，表示编写的请求内容完成了，程序才会调用
req.end()