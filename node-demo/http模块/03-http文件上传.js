const http = require('http')
const fs = require('fs')
const qs = require('querystring')

const server1 = http.createServer((req,res) => {
    if(req.url === '/upload') {
        if(req.method === 'POST') {
            // 必须设置图片的编码方式
            req.setEncoding('binary')
            let body = '';
            const totalBoundary = req.headers['content-type'].split(';')[1];
            const boundary = totalBoundary.split('=')[1];
            console.log('boundary', boundary)
            req.on('data',(data) => {
                body += data;
            })
            req.on('end', () => {
                console.log('body ====',body)
                // 1. 切分数据
                const palyload = qs.parse(body, '\r\n', ":");
                // 2. 获取最后的类型（image/png）
                const fileType = palyload['Content-Type'].substring(1);
                // 3. 获取要截取的长度
                const fileTypePostion = body.indexOf(fileType) + fileType.length;
                let binaryData = body.substring(fileTypePostion)
                binaryData = binaryData.replace('/^\s\s*/', '');

                //boundaryData = boundaryData.replaceAll('\r\n', '');
                
                // 4. 将最后的binaryData去掉
                const finalData = binaryData.substring(0, binaryData.indexOf(`--${boundary}--`));
                // console.log('finalData',finalData)
                fs.writeFile('./foo.png', finalData, 'binary', (err) => {
                    console.log(err)
                    res.end("文件上传完成！")
                })
            })
        }
    }
})

server1.listen(9000,()=> {
    console.log('server已启动成功')
})

// 生成的文件有问题！