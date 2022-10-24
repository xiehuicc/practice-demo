/* 
  与 direct 和 topic 两种类型不同的是这种模式,只需要将队列绑定到交换机上即可，
  是不需要设置路由键的，便可将消息转发到绑定的队列上，
  正式由于不需要路由键，所以 fanout 也是四个交换机类型中最快的一个，如果是做广播模式的就很适合。
*/


const amqp = require('amqplib');

async function consumer() {
  // 创建连接对象
  const connection = await amqp.connect('amqp://admin:admin@47.103.142.69:5672/?heartbeat=30')
  // 获取管道
  const channel = await connection.createChannel()
  // 声明参数
  const exchangeName = 'fanout_exchange_name'
  const queueName = 'fanout_queue'
  const routingKey = ''
  // 声明一个交换机
  await channel.assertExchange(exchangeName, 'fanout',{
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