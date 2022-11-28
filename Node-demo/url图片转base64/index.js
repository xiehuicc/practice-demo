const app = require('express')();
const http = require('http');
const request = require('request');
const imgurl  = 'http://img95.699pic.com/photo/50136/1351.jpg_wh300.jpg'

// 将网络图片转为base64
async function pictureTobase64 (url) {
  return new Promise((resolve, reject) => {
    http.get(url,function(res) {
      const chunks = []; //用于保存网络请求不断加载传输的缓冲数据
      let size = 0; //保存缓冲数据的总长度
      res.on('data',function(chunk){
        console.log(chunk,'///')
        chunks.push(chunk); //在进行网络请求时，会不断接收到数据(数据不是一次性获取到的)
        size += chunk.length;//累加缓冲数据的长度
      });
      res.on('end',function(err){
        console.log('chunks', chunks,size);
        const data = Buffer.concat(chunks, size);//Buffer.concat将chunks数组中的缓冲数据拼接起来，返回一个新的Buffer对象赋值给data
        const base64Img = 'data:image/jpg;base64,' + data.toString('base64');//将Buffer对象转换为字符串并以base64编码格式显示
        // console.log(base64Img)
        resolve({success: true, base64Img});
      });
    })
  })
}

async function getBase64(){
  let base64 = await pictureTobase64(imgurl)
  console.log(base64.base64Img)
}
getBase64()