/* 
  ** 消费端限流机制
  *  和正常建立消费端一样，要实现限流操作需要借助 prefetch 方法，这是 Rabbitmq 提供的服务质量保证 ( QOS) 功能
*/

async function consumer ({
  exchange,
  queue,
  routingKey,
  connection,
}, cb) {
  const ch = await connection.createChannel();
  await ch.assertExchange(exchange, 'direct', { durable: true });
  const queueResult = await ch.assertQueue(queue, {
      exclusive: false,
  });

  console.info('%j', queueResult);

  await ch.bindQueue(queueResult.queue, exchange, routingKey);
  await ch.prefetch(1, false);
  await ch.consume(queueResult.queue, msg => {
      cb(msg, ch);
  }, { noAck: false });
}

module.exports = {
  run: (connection) => { 
      consumer({
          exchange: 'task',
          queue: 'order_tasks',
          routingKey: 'order_task',
          connection,
      }, async function(msg, ch) {
          const data = msg.content.toString();
          console.info(`${(new Date()).getMinutes()}:${(new Date()).getSeconds()} consumer msg：%j`, data);
      
          return setTimeout(function () {
              try {
                  ch.ack(msg);
              } catch (err) {
                  console.error('消息 Ack Error：', err)
              }
          }, 5000);
      })
  }
}