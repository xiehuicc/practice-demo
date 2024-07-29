const redis = require('./redisUtils')
const uuidv1 = require('uuid').v1;
let id = uuidv1()

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(function() {
      resolve();
    }, time || 1000);
  });
}

async function test(key) {
  try {
    await redis.lock(key,id,20)
    await sleep(4000);
    
    const unLock = await redis.unlock(key, id);
    console.log('unLock: ', key, id, unLock);
  } catch (err) {
    console.log('上锁失败', err);
  }  
}

test('p1')

