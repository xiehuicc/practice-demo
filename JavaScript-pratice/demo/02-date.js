const moment = require('moment');
const dayjs = require('dayjs')

const momentNow = moment('11:30').format('HH:mm')

console.log(momentNow)
// const date = new Date()
// console.log(date)
// const date2 = moment('undefined').format('HH:mm')
// const date3 = dayjs(date).format('HH:mm')
// console.log('===',date2,date3)

// const todo_deadline =  "2022-10-12"
// const todo_date = moment(new Date()).format('YYYY-MM-DD')
// console.log('todo_date',todo_date)
// const number = Math.abs(new Date(todo_deadline) - new Date(todo_date)) // 返回绝对值
// console.log(number)
// const days = number/(1000 * 3600 * 24)
// const num = new Date(todo_deadline).getTime() - new Date(todo_date).getTime()
// const days2 = num/(1000 * 3600 * 24)
// console.log(num,days,days2)