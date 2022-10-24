const amqp = require('amqplib');

async function consumer() {
    // 1. 创建链接对象
    //(node:11900) UnhandledPromiseRejectionWarning: Error: Expected ConnectionOpenOk; got <ConnectionClose channel:0>
    // 这个问题与心跳有关。您必须将心跳作为参数传递给您的连接 URL：/?heartbeat=30
    const connection = await amqp.connect('amqp://admin:admin@47.103.142.69:5672/?heartbeat=30');

    // 2. 获取通道
    const channel = await connection.createChannel();

    // 3. 声明参数
    const queueName = 'helloworldQueue';

    // 4. 声明队列，交换机默认为 AMQP default
    await channel.assertQueue(queueName);

    // 5. 消费
    await channel.consume(queueName, msg => {
        console.log('Consumer：', msg.content.toString());
        channel.ack(msg);
    });
}

consumer()