const amqp = require('amqplib');

async function producer() {
    // 创建链接对象
    const connection = await amqp.connect('amqp://admin:admin@47.103.142.69:5672');

    // 获取通道
    const channel = await connection.createChannel();

    /** 改造部分 */
    // 声明参数
    const exchangeName = 'topic_exchange_name';
    const routingKey1 = 'topic.routingKey.test1';
    const routingKey2 = 'topic.routingKey.test2';
    const routingKey3 = 'topic.routingKey.test3.1';
    const routingKey4 = 'topic.routingKey2.test4';
    const routingKey5 = 'topic.routingKey2.test5.1';
    const msg = 'hello world';

    // 交换机
    await channel.assertExchange(exchangeName, 'topic', {
        durable: true,
    });

    // 发送消息
    await channel.publish(exchangeName, routingKey1, Buffer.from(msg + routingKey1));
    await channel.publish(exchangeName, routingKey2, Buffer.from(msg + routingKey2));
    await channel.publish(exchangeName, routingKey3, Buffer.from(msg + routingKey3));
    await channel.publish(exchangeName, routingKey4, Buffer.from(msg + routingKey4));
    await channel.publish(exchangeName, routingKey5, Buffer.from(msg + routingKey5));
    /** 改造部分 */

    // 关闭链接
    await channel.close();
    await connection.close();
}

producer();