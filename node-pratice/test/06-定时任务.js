const schedule = require("node-schedule")
let f = true
schedule.scheduleJob('0 26 11 * * *', async () => {
  if(f) {
    console.log('定时任务开始','每日凌晨3点零4分同步组织架构，人员')
    f = true
  } else {
    console.log('f is',f)
    f = true
  }
 })
 
 schedule.scheduleJob('0 */1  8,9,10,11,12,14,15,16,17,18,19,20 * * *', async () => {
  if(f) {
    console.log('定时任务开始','每五分钟增量同步人员')
    f = true
  } else {
    console.log('f ==',f)
    f = true
  }
})