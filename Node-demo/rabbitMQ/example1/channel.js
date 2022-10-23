var amqp = require('amqplib/callback_api');
//建立连接
amqp.connect({protocol:'amqp',hostname:'47.103.142.69',port:5672,username:'admin',password:'admin'},function(err,conn) {
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