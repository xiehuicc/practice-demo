const rabbitmq = require('./connect.js')

/* 
  * 消费一个死信队列
  * @param { Object } connection
*/
async function consumerDLX(connection) {
  const testExchangeDLX  = 'testExDLX'
  const testRoutingKeyDLX = 'testRoutingKeyDLX'
  const testQueueDLX = 'testQueueDLX'
  
  const ch = await connection.createChannel()
  await ch.assertExchange(testExchangeDLX, 'direct', {durable: true})
  const queueResult = await ch.assertQueue(testQueueDLX, {
    exclusive: false
  })
  await ch.bindQueue(queueResult.queue, testExchangeDLX, testRoutingKeyDLX)
  await ch.consume(queueResult.queue, msg => {
    console.log('Consumer msg:', msg.content.toString());
  }, {noAck: false})
}
// 消费消息
rabbitmq.init().then(connection => consumerDLX(connection))