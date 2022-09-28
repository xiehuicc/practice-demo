/* 
  发布订阅模式一般用来做广播，发布者发送消息到指定的通道，订阅者订阅指定的通道
  publish
  - 发送消息到指定通道
  - 回调返回的结果表示有多少个订阅者
  subscribe
  - 订阅指定通道

  使用场景
  - 实时聊天室（消息可以异步落到数据库持久化）成员订阅同一个通道，并且发布消息在同一个通道
  - 简单的消息队列场景，能容忍丢失率的情况(严格的情况下请使用专业的消息队列MQ)
*/


const redis = require('redis')

//创建发布者
const client = redis.createClient(6379,'127.0.0.1',{})
// 创建订阅者
const subscriber = redis.createClient(6379,'127.0.0.1',{})

client.get('entry-lock', function (err, reply) {
  if(err) {
    console.log(err)
    return
  }
  console.log('get redis key:',reply)
})
subscriber.on("error", function (err) {
  console.log("Error " + err);
});
client.on('ready', function(err) {
  if(err) {
    console.log('redis error',err)
  }
  // 准备就绪后订阅chat频道
  subscriber.subscribe('chat');
  console.log('chat频道订阅成功');
  console.log('redis ready is ok')
})

client.on('connect',function() {
  console.log('redis connected ok')
})

// 监听订阅成功事件
subscriber.on('subscribe', function(channel,count){
  console.log('client subscribe to'+ channel + ', '+ count + 'total subscribe')
})

// 收到消息后执行回调，message是redis发布的消息
subscriber.on('message', function(channel,message){
  console.log(`我接受到了${channel}频道的消息`, message)
})

// 监听取消订阅事件
subscriber.on('unsubscribe', function(channel,count){
  console.log('client unsubscribe from'+ channel + ', '+ count + 'total unsubscribe')
})



let count = 0
let interval = setInterval(() => {
  count ++
  // 发布者发布消息
  client.publish('chat', count,(err, reply) => {
    if(err) {
      console.log('client publish error',err)
    }
    console.log('client publish reply', reply)
  });
  if (count >= 10) {
    clearInterval(interval)
    // 订阅者取消订阅
    subscriber.unsubscribe("chat")
    // 订阅者/发布者关闭redis连接
    subscriber.quit()
    client.quit()
  }
}, 1000)


exports.client = client
exports.redis = redis