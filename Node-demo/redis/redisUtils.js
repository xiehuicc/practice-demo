const Redis = require("ioredis");
const uuidv1 = require('uuid').v1;

const redisOptions = {
  host: '127.0.0.1',
  post: 6379
}
class RedisUtils {
  constructor() {
    this.connect()
    this.id = uuidv1()
  }
  /* 
    connection
  */
  connect() {
    this.client = new Redis(redisOptions)
    this.subclient = new Redis(redisOptions)
    console.log('3233333',this.client)
    this.client.on('error', (err) => {
      console.log('connect err',err)
    })
    this.client.on('ready', () => {
      console.log('connect to redis')
    })

    this.subscribes = {}
    let that = this
    // 消息订阅
    this.subclient.on('message', (channel, message) => {
      logger.info(`message: ${message} from channel: ${channel}`)
      that.subscribes[channel].forEach(cb => {
        cb(message)
      })
    })

  }

  set(key, value, expireTime) {
    return new Promise((resolve, reject) => {
      this.client.set(key, value,(err, succ) => {
        if (err) reject(err)
        if (succ === 'OK') {
          resolve({ success: true })
        } else {
          resolve({ success: false })
        }
      })
    })
  }

  get(key) {
    return new Promise((resolve,reject)=>{
      this.client.get(key,(err, val) => {
        if (err) reject(err)
        resolve(val)
      })
    })
  }

  del(key) {
    return new Promise((resolve,reject)=>{
      this.client.del(key,(err, num) => {
        if (err) reject(err)
        resolve({count:num, success: true })
      })
    })
  }

  /* 
    * redis 分布式锁
  */
  async lock(key, value, expireTime) {
    return new Promise((resolve, reject) => {
      this.client.setnx(key, value,expireTime,(err,val) => {
        if (err) reject(err)
        resolve(val)
      })
    })
  }
  
  /* 
    * 释放锁
  */
  async unlock(key) {
    return this.del(key)
  }
  
}

module.exports = new RedisUtils()