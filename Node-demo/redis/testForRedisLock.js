const Redis = require("ioredis");
const redis = new Redis(6379, "127.0.0.1");
const uuidv1 = require('uuid').v1;
const RedisLock = require('./02-redis实现分布式锁').RedisLock

// console.log('==========',redis)
const redisLock = new RedisLock(redis);

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(function() {
      resolve();
    }, time || 1000);
  });
}

async function test(key) {
  try {
    const id = uuidv1();
    await redisLock.lock(key, id, 20);
    await sleep(4000);
    
    const unLock = await redisLock.unLock(key, id);
    console.log('unLock: ', key, id, unLock);
  } catch (err) {
    console.log('上锁失败', err);
  }  
}

test('name1');
test('name1');

/* 
输出：
name1-5ad009d0-3ef0-11ed-b9c9-cfa4e1fff604上锁成功
name1-5ad030e0-3ef0-11ed-b9c9-cfa4e1fff604 等待重试
name1-5ad030e0-3ef0-11ed-b9c9-cfa4e1fff604 开始重试
name1-5ad030e0-3ef0-11ed-b9c9-cfa4e1fff604 等待重试
unLock:  name1 5ad009d0-3ef0-11ed-b9c9-cfa4e1fff604 true
name1-5ad030e0-3ef0-11ed-b9c9-cfa4e1fff604 开始重试
name1-5ad030e0-3ef0-11ed-b9c9-cfa4e1fff604上锁成功
unLock:  name1 5ad030e0-3ef0-11ed-b9c9-cfa4e1fff604 true

同时调用了两次 test 方法进行上锁，只有第一个是成功的，
第二个name1-5ad009d0-3ef0-11ed-b9c9-cfa4e1fff604 上锁的时候发现 key = name1 已被占坑，开始重试，
由于以上测试中设置了 20 秒钟之后自动释放锁，name1-5ad009d0-3ef0-11ed-b9c9-cfa4e1fff604 在经过两次重试之后上锁成功。
*/