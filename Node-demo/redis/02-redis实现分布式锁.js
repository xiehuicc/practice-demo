/* 
  分布式锁：
  为了提供分布式锁服务，要确保一下几点
  - 互斥访问：有且就有一个客户端能获取到锁
  - 避免死锁: 对于任意客户端，其最终都能获得锁，即使已拿到锁的客户端因各种问题而未解锁
  1.上锁：
    第一步通过setnx命令占坑，为了防止死锁，还会设置一个过期时间
    setnx key value
    expire key seconds
  原子性操作是指命令在执行过程中并不会被其它的线程或者请求打断,以上如果 setnx 执行成功之后，出现网络闪断 expire 命令便不会得到执行，会导致死锁出现。
  Redis 官方 2.8 版本之后支持 set 命令传入 setnx、expire 扩展参数，这样就可以一条命令一口气执行，避免了上面的问题
  - value：建议设置为一个随机值，在释放锁的时候会进一步讲解
  - EX seconds：设置的过期时间
  - PX milliseconds：也是设置过期时间，单位不一样
  - NX|XX：NX 同 setnx 效果是一样的
    set key value [EX seconds] [PX milliseconds] [NX|XX]
  2.释放锁
    释放锁的时候要做到仅释放自己占有的锁。
    加锁的过程中建议把 value 设置为一个随机值，主要是为了更安全的释放锁，在 del key 之前先判断这个 key 存在且 value 等于自己指定的值才执行删除操作
    判断和删除不是一个原子性的操作，此处仍需借助 Lua 脚本实现。
    if redis.call("get",KEYS[1]) == ARGV[1] then
      return redis.call("del",KEYS[1])
    else
        return 0
    end
*/

class RedisLock {
  /* 
    * 初始化 RedisLock
    * @param {*} client
    * @param {*} options
  */
  constructor(client, options= {}) {
    if(!client) {
      throw new Error("client not exist");
    }
    if(client.status !== 'connecting') {
      throw new Error("client is not connected");
    }
    this.lockLeaseTime = options.lockLeaseTime || 2; // 默认锁过期事件2秒
    this.lockTimeout = options.lockTimeout || 5; // 默认锁超时时间5s
    this.expiryMode = options.expiryMode || 'EX'
    this.setMode = options.setMode || 'NX'
    this.client = client
  }
  /* 
  * 上锁
  * @param {*} key
  * @param {*} value
  * @param {*} expire 单位以秒计
  */
  async lock(key, value, expire){
    const start = Date.now()
    const self = this
    return (async function intranetLock() {
      try {
      
        const result = await self.client.set(key, value,self.expiryMode, expire || self.lockLeaseTime,self.setMode)

        // 上锁成功
        if(result === 'OK') {
          console.log(`${key}-${value}上锁成功`)
          return true
        }

        // 锁超时 
        // Math.floor() 返回小于或等于一个给定数字的 最大整数(向下取整)
        if(Math.floor((Date.now() - start) / 1000) > self.lockTimeout) {
          console.log(`${key}-${value}上锁重试超时结束`)
          return false
        }

        // 循环等待重试
        console.log(`${key}-${value} 等待重试`)
        await sleep(3000)
        console.log(`${key}-${value} 开始重试`)
        return intranetLock()
      } catch (e) {
        throw new Error(e)
      }
    })();
  }

  /* 
    * 释放锁
    * @param {*} key
    * @param {*} val
  */
  async unLock(key, val) {
    const self = this
    const script = "if redis.call('get',KEYS[1]) == ARGV[1] then" +
    "   return redis.call('del',KEYS[1]) " +
    "else" +
    "   return 0 " +
    "end";

    try {
      const result = await self.client.eval(script, 1, key, val)
      console.log('unlock', result)
      if(result === 1) return true;
      return false;
    } catch (error) {
      console.error('unlock error:', error)
    }
  }
}


// node中实现睡眠
async function sleep(s) {
  return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(s);
      }, s);
  });
}


exports.RedisLock = RedisLock;
