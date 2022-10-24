var amqp = require('amqplib/callback_api');
//建立连接
amqp.connect(('amqp://admin:admin@47.103.142.69:5672/?heartbeat=30'),function(err,conn) {
    if(err) {
      console.log(err);
        return;
    }
    conn.createChannel(function(err,ch){
        var q = 'rpc_queue';

        ch.assertQueue(q,{ durable:false });
        ch.prefetch(1);
        console .log('[x]等待RPC请求');
        ch.consume(q,function  reply(msg) {
            var n = parseInt(msg.content.toString());

            console.log("[.] fib(%d)",n);

            var r = fibonacci(n);

            ch.sendToQueue(msg.properties.replyTo,new Buffer(r.toString()),{correlationId:msg.properties.correlationId});
            ch.ack(msg);
        });
    });
});

function  fibonacci(n) {
    if(n == 0 || n == 1){
        return n;
    }else{
        fibonacci(n  - 1)+ fibonacci(n  - 2);
    }
}