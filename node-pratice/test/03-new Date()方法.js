function getDeviceParam(floor) {
    let startTime = new Date()
    startTime.setHours(0)
    startTime.setMinutes(0)
    startTime.setSeconds(0)
    let endTime = new Date()
    endTime.setHours(24)
    endTime.setMinutes(0)
    endTime.setSeconds(0)
    console.log(startTime)
    console.log(endTime) 
}

// console.log(getDeviceParam('2F'))



// let endDateTime = "2022-10-12T04:00:00.000Z"
// let startDateTime = "2022-10-12T03:30:00.000Z"
// let dateNow = new Date()
// console.log(dateNow)
// if(Date.parse(dateNow) > Date.parse(endDateTime))  {
//   console.log(1111111111)
//   } else if(Date.parse(startDateTime) < Date.parse(dateNow) && Date.parse(dateNow)< Date.parse(endDateTime)) {
//     console.log(2222222222)
// }

const date = new Date()
date.setHours(8)
console.log(date)

import moment from "moment"

const todayNow = moment(new Date()).format('YYYY-MM-DD HH:MM')
console.log(todayNow)