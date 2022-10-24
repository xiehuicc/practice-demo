const amqp = require('amqplib');

async function producer() {
  // 创建链接对象
  const connection = await amqp.connect('amqp://admin:admin@47.103.142.69:5672/?heartbeat=30')

  // 获取通道
  const channel = await connection.createChannel()

  // 声明参数
  const exchangeName = 'direct_exchange_name'
  const routingKey = 'direct_routing_key'
  const msg = 'This is direct exchange'

  // 交换机
  await channel.assertExchange(exchangeName, 'direct', {
    durable: true,
  })

  // 发送消息
  channel.publish(exchangeName,routingKey, Buffer.from(msg))
  // 关闭连接
  await channel.close()
  await connection.close()
}

producer()