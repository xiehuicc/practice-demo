let date = new Date()
let today = new Date()
let weekData = []
const weekDayInfo = ["周一", "周二", "周三", "周四", "周五", "周六","周日"]
let day = date.getDate()
const weekday = date.getDay() // 返回一个具体日期中一周的第几天，0 表示星期天
// 日历
let j = 1,setMonthStatus = true;
for(let i = 0; i< 7; i++) {
  let daynumber = day - weekday + 1 + i
  if(date.getDate() === 1 || daynumber > 31) { // 当日期为下个月的1号时，需要重新设置daynumber,并把月份设置为下个月
    if(setMonthStatus) {
      date.setMonth(date.getMonth() + 1)
      setMonthStatus = false
    }
    // 该月为小月时
    let smallMonth = new Date('',date.getMonth(),0)
    if(smallMonth.getDate() < 31) {
       daynumber = j ++
    } else {
      daynumber = ++ j
    }
  }
  date.setDate(daynumber)
  today.setDate(daynumber)
  weekData.push({
    week: weekDayInfo[i],
    day: date.getDate(),
    today: JSON.parse(JSON.stringify(today)) // 利用深拷贝，否则日期信息会被覆盖
  })
}

console.log(weekData)