const fs = require('fs');

const {access,constants } = require('fs/promises');

// 检查文件是否存在
fs.stat('test.txt',(err)=> {
  console.log('err:',err)
  if(!err) {
    // 异步读取文件
    fs.readFile('test.txt','utf-8',(err, data)=>{
      if(!err) {
        console.log('test.txt data:', data)
      }
    })
    // 同步读取文件
    const data = fs.readFileSync('test.txt','utf-8')
    console.log('readFileSync test.txt data:',data)
  } 
})

fs.readdir('test.txt',)
const Test = async()=> {
  try {
    console.log('11')
    await access('./test.txt').then((res)=> {
      console.log('res',res)
    })
    console.log('can access test.txt')
  }catch(err) {
    console.log(err);
  }
}
Test()