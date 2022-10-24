/* 
  生产者指定 RoutingKey ，消费端根据指定的队列通过模糊匹配的方式进行相应转发，两种通配符模式如下：

  #：可匹配一个或多个关键字
  *：只能匹配一个关键字
*/

const amqp = require('amqplib');

async function consumer() {
  // 创建连接对象
  const connection = await amqp.connect('amqp://admin:admin@47.103.142.69:5672')
  // 获取管道
  const channel = await connection.createChannel()
  // 声明参数
  const exchangeName = 'topic_exchange_name'
  const queueName = 'direct_queue'
  const routingKey = 'black.*' // *只能匹配一个关键字
  // 声明一个交换机
  await channel.assertExchange(exchangeName, 'topic',{
    durable: true,
  })
  // 声明一个队列
  await channel.assertQueue(queueName)
  // 绑定关系（队列，交换机，路由键）
  await channel.bindQueue(queueName, exchangeName, routingKey)

  // 消费
  await channel.consume(queueName, msg => {
    console.log('Consumer1: ', msg.content.toString());
    channel.ack(msg)
  })
  console.log('消费端启动成功');
}

consumer();