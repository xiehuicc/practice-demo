/**
 * Created by lailai on 2017/10/31.
 */
const request = require('request');
const http = require('http');
const cheerio = require('cheerio');
const fs = require('fs');
const Bagpipe = require('bagpipe');
 
const url='http://image.so.com/i?q=%E7%8C%AB&src=tab_www';
request(url,function(err,res,body){
  if(!err && res.statusCode === 200){
    const $=cheerio.load(body);
    const imgList=[];
    JSON.parse($('script[id="initData"]').html()).list.forEach(function(item){
        imgList.push(item.img);
    });
    console.log(imgList,'====')
    //第一种方式————传统的文件下载方式
    // for(const i=0;i<imgList.length;i++){
    //    downloadPic(imgList[i],'./Img/'+i+'.jpg');
    // }
    const start=(new Date()).getTime();

    //第二种方式————async关于map异步操作
    /**
    * 并行执行。async.map同时对集合中所有元素进行操作，结果汇总到最终callback里。如果出错，则立刻返回错误以及已经执行完的任务的结果，未执行完的占个空位
    *顺序执行。async.mapSeries对集合中的元素一个一个执行操作，结果汇总到最终callback里。如果出错，则立刻返回错误以及已经执行完的结果，未执行的被忽略
    * @type {*|exports|module.exports}
    */
    // async.mapSeries(imgList,function(item,callback){
    //    setTimeout(function(){
    //        downloadPic(item,'./Img/'+(new Date()).getTime()+'.jpg');
    //        callback(null,item);
    //    },500);
    // },function(err,results){});
    // const end=(new Date()).getTime();
    // console.log('下载花费时间:'+end-start);

    //第三种方式——bagpipe控制并发执行
    const bagpipe = new Bagpipe(10,{timeout: 5000});
    for(let i = 0; i < imgList.length; i++){
      bagpipe.push(downloadPic,imgList[i],'./Img/'+i+'.jpg',function(err,data){
        const end=(new Date()).getTime();
        console.log('下载花费时间:'+(end-start));
      })
    }
  }
});

 //文件下载
 const downloadPic= async function(url,dest){

  // 有一些url是无效的，抛出异常getaddrinfo ENOTFOUND img1.juimg.com 此方法会中断程序（待解决）
  // return new Promise(function(resolve,reject) {
  //   http.get(url, res => {
  //     if(res.statusCode === 200) {
  //       http.get(url).pipe(fs.createWriteStream(dest))
  //       // const writerStream = fs.createWriteStream(dest)
  //       // res.pipe(writerStream)
  //       resolve('success!')
  //       res.on('end', function() {
  //         console.log('pic saved end')
  //       })
  //       // writerStream.on('error', function(err) {
  //       //   console.log('pic error',err)
  //       // })
  //     } else {
  //       reject(new Error("下载失败，返回状态码不是200，状态码：" + res.statusCode));
  //     }
  // })
  // })
  
  return new Promise(function (resolve, reject) {
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // 需要设置写入流的格式，'binary' 否则可能出现图片打不开的情况
            request(url).pipe(fs.createWriteStream(dest,'binary')).on("close", function (err) {
              resolve("下载成功");
              console.log('pic saved'+dest)
            });
        } else {
            if (error) {
                reject(error);
            } else {
                reject(new Error("下载失败,返回状态码不是200,状态码：" + response.statusCode));
            }
        }
    });
  });

  // 下载的图片打不开 （待解决）
  // request(url,(err,response,body) => {
  //   if(!err && response.statusCode == 200) {
  //      response.pipe(fs.createWriteStream(dest)).on('close',function(){
  //       console.log('pic saved'+dest);
  //     })
  //   } else {
  //     console.log('error',err);
  //   }
  //  })
 };