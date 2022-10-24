/* 
  不需要 Exchange 进行绑定，根据 RoutingKey 匹配消息路由到指定的队列。
*/

const amqp = require('amqplib');

async function consumer() {
  // 创建连接对象
  const connection = await amqp.connect('amqp://admin:admin@47.103.142.69:5672/?heartbeat=30')
  // 获取管道
  const channel = await connection.createChannel()
  // 声明参数
  const exchangeName = 'direct_exchange_name'
  const queueName = 'direct_queue'
  const routingKey = 'direct_routing_key'
  // 声明一个交换机
  await channel.assertExchange(exchangeName, 'direct',{
    durable: true,
  })
  // 声明一个队列
  await channel.assertQueue(queueName)
  // 绑定关系（队列，交换机，路由键）
  await channel.bindQueue(queueName, exchangeName, routingKey)

  // 消费
  await channel.consume(queueName, msg => {
    console.log('Consumer: ', msg.content.toString());
    channel.ack(msg)
  })
  console.log('消费端启动成功');
}

consumer();