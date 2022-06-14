const fs = require('fs')

// 传统的写入
// fs.writeFile('./bar.txt','hello stream',err => {
//     console.log(err)
// })


//Stream 的写入方式
const writer = fs.createWriteStream('./bar.txt',{
    flags: 'a',
    start: 4
})

writer.write('你好啊11',err => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('写入成功')
})

writer.write('李云鹤',err => {
    console.log('第二次写入')
})

// writer.close()

// 1.wirte("world"),2.close()
writer.end('world')

writer.on('close',()=>{
    console.log('写入文件关闭');
})