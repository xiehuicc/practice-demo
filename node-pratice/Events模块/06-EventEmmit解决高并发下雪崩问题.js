const events = require('events');
const fs = require('fs');

const emitter = new events.EventEmitter();
const status = {};

const select = function(file, filename, cb) {
  // 这里我们利用了once()方法，将所有请求的回调都压入事件队列中，利用其执行一次就会将监视器移除的特点，保证每一个回调只会被执行一次。
    emitter.once(file,cb);
    
    if (status[file] === undefined) {
        status[file] = 'ready'; // 不存在设置默认值
    }
    if (status[file] === 'ready') {
        status[file] = 'pending';
        fs.readFile(file, function(err, data) {
            console.log(filename);
            emitter.emit(file, err, data.toString());
            status[file] = 'ready';
            
            setTimeout(function() {
                delete status[file];
            }, 1000);
        });
    }
}

for (let i=1; i<=11; i++) {
    if (i % 2 === 0) {
        select(`tmp/a.txt`, 'a 文件', function(err, result) {
            console.log('err: ', err, 'result: ', result);
        });
    } else {
        select(`tmp/b.txt`, 'b 文件', function(err, result) {
            console.log('err: ', err, 'result: ', result);
        });
    }
}