### 分布式锁
  02-redis实现分布式锁
### 单节点锁
  testForRedisLock.js
### 多节点锁
  通过使用redlock算法来实现，见03-redis红锁(redlock).js
  对于单节点锁的实现，如果 Redis 是以主从方式进行部署的，会发生错误，这是因为主从同步是异步的，当主库发生异常时，从库还未获取到锁的信息，则可能导致多个进程持有锁，考虑以下场景:
  1. node1 在 Master 节点获取到了锁。
  2. Master 在 node1 创建的锁写入至 Slave 之前宕机了。
  3. 由于 Sentinel 机制，Slave 变成了 Master 节点，此时 Slave 没有 node1 持有锁的信息。
  4. node2 在 Slave 节点获取到了和 node1 还持有的相同的锁