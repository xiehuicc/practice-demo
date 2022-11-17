const log4js = require('log4js');
const path = require('path')

const logger = log4js.getLogger('iobp-api')
const baseLogPath = path.resolve(__dirname, './logs')

const logConfig = {
  appenders: {
    response: {
      type: 'file',
      category: 'resLogger',
      filename: `${baseLogPath}/response/res`,
      pattern: 'yyyy-MM-dd.log', //日志输出模式
      alwaysIncludePattern: true,
      daysToKeep: 15,
      maxLogSize: 104800,
      backups: 10
    }
  },
  categories: {
    response: {appenders: ['response'], level: 'info'},
    default: { appenders: ['response'], level: 'info'}
},
}
const user = [
  {
    a: 1
  },
  {
    b:2
  }
]
let status
async function intercept(data) {
  log4js.configure(logConfig)
  logger.info(`${new Date()}hello world1`)
  // const info = 
  logger.info(`${status ? '增量' : '全量'}${JSON.stringify(user)}hello world1`)
  // logger.error(`${new Date()}hello world2`)
  logger.debug(`${new Date()}hello world3`)
}
intercept()
