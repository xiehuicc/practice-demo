const moment = require('moment');
const dayjs = require('dayjs')

const date = new Date()
console.log(date)
const date2 = moment(date).format('HH:mm')
const date3 = dayjs(date).format('HH:mm')
console.log(date2,date3)
