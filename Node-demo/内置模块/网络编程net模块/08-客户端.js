const dgram = require('dgram');
const client = dgram.createSocket('udp4');
const msg = Buffer.from('hello world');
const port = 3222;
// const host = '127.0.0.1';
const host = '255.255.255.255';

client.bind(function(){
    client.setBroadcast(true);
    client.send(msg, port, host, function(err){
        if(err) throw err;
        console.log('msg has been sent');
        client.close();
    });
});