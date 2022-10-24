const amqp = require('amqplib');

async function producer() {
  // 创建链接对象
  const connection = await amqp.connect('amqp://admin:admin@47.103.142.69:5672')

  // 获取通道
  const channel = await connection.createChannel()

  // 声明参数
  const exchangeName = 'topic_exchange_name'
  // const routingKey1 = 'topic_routingKey.test1'
  // const routingKey2 = 'topic_routingKey.test2'
  // const routingKey3 = 'topic_routingKey.test3.1'
  // const routingKey4 = 'topic_routingKey2.test4'
  // const routingKey5 = 'topic_routingKey2.test5.1'
  const routingKey1 = 'black.test1'
  const routingKey2 = 'black.test2'
  const routingKey3 = 'black.test3.1'
  const routingKey4 = 'green.test4'
  const routingKey5 = 'green.test.4.1'
  const msg = 'This is Topic exchange'

  // 交换机
  await channel.assertExchange(exchangeName, 'topic', {
    durable: true,
  })

  // 发送消息
  channel.publish(exchangeName,routingKey1, Buffer.from(msg + '--' + routingKey1))
  channel.publish(exchangeName,routingKey2, Buffer.from(msg + '--' + routingKey2))
  channel.publish(exchangeName,routingKey3, Buffer.from(msg + '--' + routingKey3))
  channel.publish(exchangeName,routingKey4, Buffer.from(msg + '--' + routingKey4))
  channel.publish(exchangeName,routingKey5, Buffer.from(msg + '--' + routingKey5))
  // 关闭连接
  await channel.close()
  await connection.close()
}

producer()