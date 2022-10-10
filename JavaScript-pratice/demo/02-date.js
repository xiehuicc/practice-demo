const moment = require('moment');

const date = new Date()
console.log(date)
const date2 = moment(date).format('HH:mm')
console.log(date2)