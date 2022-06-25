const http = require('http')
const fs = require('fs')
const qs = require('querystring')

const server1 = http.createServer((req,res) => {
    res.end('hello server1')
})

// 加了ip参数，本机的ip地址不会不到
server1.listen(9000,()=> {
    console.log('server已启动成功')
})

http.request({
    method: 'POST',
    hostname: 'localhost',
    port: 9000
},(req,res) =>{
    if(req.url === '/upload') {
        if(req.method === 'POST') {
            // 必须设置图片的编码方式
            req.setEncoding('binary')

            let body = '';
            const totalBoundary = req.headers['Content-type'].split(';')[1];
            const boundary = totalBoundary.split('=')[1];
            console.log('boundary', boundary)
            res.on('data',(data) => {
                body += data;
            })

            req.on('end', () => {
                 // 切分数据
                const palyload = qs.parse(body, '\r\n', ":");
                // 获取最后的类型（image/png）
                const fileType = palyload['Content-type'].substring(1);
                // 获取要截取的长度
                const fileTypePostion = body.indexOf(fileType) + fileType.length;
                let binaryData = body.substring(fileTypePostion)
                binaryData = binaryData.replace('/^\s\s*/', '');

                //boundaryData = boundaryData.replaceAll('\r\n', '');
                const finalData = binaryData.substring(0, binaryData.indexOf(`--${boundary}--`));
                
                fs.writeFile('./foo.png', finalData, 'binary', (err) => {
                    console.log(err)
                    res.end("文件上传完成！")
                })
            })
        }
    }
})