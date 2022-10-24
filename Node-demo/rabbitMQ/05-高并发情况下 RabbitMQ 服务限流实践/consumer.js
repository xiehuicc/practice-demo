const amqp = require('amqplib');

async function consumer() {
    // 1. 创建链接对象
    const connection = await amqp.connect('amqp://admin:admin@47.103.142.69:5672');

    // 2. 获取通道
    const channel = await connection.createChannel();

    // 3. 声明参数
    const exchangeName = 'qosEx';
    const queueName = 'qosQueue';
    const routingKey = 'qos.#';

    // 4. 声明交换机、对列进行绑定
    await channel.assertExchange(exchangeName, 'topic', { durable: true });
    await channel.assertQueue(queueName);
    await channel.bindQueue(queueName, exchangeName, routingKey);
    
    // 5. 限流参数设置
    //prefetch 参数说明：
    // count：每次推送给消费端 N 条消息数目，如果这 N 条消息没有被ack，生产端将不会再次推送直到这 N 条消息被消费。
    // global：在哪个级别上做限制，ture 为 channel 上做限制，false 为消费端上做限制，默认为 false。
    await channel.prefetch(1, false);

    // 6. 限流，noAck参数必须设置为false
    await channel.consume(queueName, msg => {
        console.log('Consumer：', msg.content.toString());

        channel.ack(msg);
    }, { noAck: false });
}

consumer();