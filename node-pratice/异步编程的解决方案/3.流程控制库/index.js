/**
 * Created by lailai on 2017/10/31.
 */
 var request=require('request');
 const axios = require('axios')
 var cheerio=require('cheerio');
 var fs=require('fs');
 var async=require('async');
 var Bagpipe=require('bagpipe');
 
 var url='http://image.so.com/i?q=%E7%8C%AB&src=tab_www';
 request(url,function(err,res,body){
     if(!err && res.statusCode === 200){
         var $=cheerio.load(body);
         var imgList=[];
         JSON.parse($('script[id="initData"]').html()).list.forEach(function(item){
             imgList.push(item.img);
         });
         console.log(imgList,'====')
         //console.log(imgList);
         //第一种方式————传统的文件下载方式
         // for(var i=0;i<imgList.length;i++){
         //    downloadPic(imgList[i],'./Img/'+i+'.jpg');
         // }
         var start=(new Date()).getTime();
 
         //第二种方式————async关于map异步操作
         /**
          * 并行执行。async.map同时对集合中所有元素进行操作，结果汇总到最终callback里。如果出错，则立刻返回错误以及已经执行完的任务的结果，未执行完的占个空位
          *顺序执行。async.mapSeries对集合中的元素一个一个执行操作，结果汇总到最终callback里。如果出错，则立刻返回错误以及已经执行完的结果，未执行的被忽略
          * @type {*|exports|module.exports}
          */
         //async.mapSeries(imgList,function(item,callback){
         //    setTimeout(function(){
         //        downloadPic(item,'./Img/'+(new Date()).getTime()+'.jpg');
         //        callback(null,item);
         //    },500);
         //},function(err,results){});
         //var end=(new Date()).getTime();
         //console.log('下载花费时间:'+end-start);
 
         //第三种方式——bagpipe控制并发执行
         var bagpipe=new Bagpipe(10,{timeout: 5000});
         for(var i=0;i<imgList.length;i++){
             bagpipe.push(downloadPic,imgList[i],'./Img/'+i+'.jpg',function(err,data){
                 //if(err) console.log(err);
                 //else console.log(data);
                 var end=(new Date()).getTime();
                 console.log('下载花费时间:'+(end-start));
             })
         }
 
     }
 });
 //文件下载
 var downloadPic= async function(url,dest){
   console.log('---',url,dest)
   request(url,function(err,httpResponse,body) {
   
     if(!err && body) {
       httpResponse.pipe(fs.createWriteStream(dest)).on('close',function(){
         console.log('pic saved'+ dest);
       })
     }
   })
   // request(src).pipe(fs.createWriteStream(dest)).on('close',function(){
   //   console.log('pic saved');
   // })
 };