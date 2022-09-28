const Client = require("ioredis");
const { default: Redlock } = require("redlock");

const redis1 = new Client(6379, "127.0.0.1");
const redis2 = new Client({"db": 3,"host": "192.168.22.100","password": "admin","port": 6379})
const redis3 = new Client("redis://:admin@192.168.21.250:6379")
// const redlock = new Redlock([client1], {
//     retryDelay: 200, // time in ms
//     retryCount: 5,
// });

// 多个 Redis 实例
const redlock = new Redlock(
    [redis1, redis2,redis3],
    {
        retryCount: 10,  // Redlock 尝试锁定资源的最大次数
        retryDelay: 5, // time in ms
    }
)

async function test(key, ttl, client) {
    // Acquire a lock.
    // key 需传入数组
    let lock = await redlock.acquire(key, ttl);;
    try {
        console.log(client, lock.value);
        // 延长锁。请注意，这会返回一个新的 `Lock` 实例
        lock = await lock.extend(5000);

        // do something ...

    //    await lock.release();
    } catch(err) {
        console.error(client, err);
        await lock.release()
    } finally {
        // lock.release() 返回的是一个promise对象，如何处理promise对象？判断锁是否被释放掉了
        const unlock = await lock.release().finally(() => {
            console.log('111111')
        })
        console.log('unlock '+ key + ' ' +lock.value)
    }
}

test(['name1'], 10000, 'redis1');
test(['name1'], 10000, 'redis2');
test(['name1'], 10000, 'redis3');