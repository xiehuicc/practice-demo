/* 
  * 路由一个死信队列
  * @param { Object } connection
*/
const rabbitmq = require('./connect.js')

async function producerDLX(connection) {
  const testExchange = 'testEx'
  const testQueue = 'testQu'
  const testExchangeDLX = 'testExDLX'
  const testRoutingKeyDLX = 'testRoutingKeyDLX'

  // 获取通道
  const channel = await connection.createChannel()
  // 声明一个交换机
  await channel.assertExchange(testExchange, 'direct', {durable: true})
  // 声明一个队列
  const queueReuslt = await channel.assertQueue(testQueue, { 
    exclusive: false,
    deadLetterExchange: testExchangeDLX,  // 设置 DLX，当正常队列的消息成为死信后会被路由到 DLX 中
    deadLetterRoutingKey: testRoutingKeyDLX // 设置 DLX 指定的路由键
  })
  await channel.bindQueue(queueReuslt.queue, testExchange)
  const msg = 'achive Dead-Letter-Exchange'
  console.log('producer msg：', msg);
  await channel.sendToQueue(queueReuslt.queue, Buffer.from(msg), {expiration: '10000'}) // consumer 是在 10 秒后接收到的消息

  channel.close()
}

rabbitmq.init().then(connection => producerDLX(connection));