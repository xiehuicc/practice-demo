/* 
  * 需求：显示当前一周的日期
  * 思路：
    * 获取今日星期几，往前推周一的日期
    * 
*/
// 这个版本有bug
let today = new Date('2022-11-06')
let weekData = []
const weekDayInfo = ["周一", "周二", "周三", "周四", "周五", "周六","周日"]
let day = today.getDate() // 今天是几号
let weekday = today.getDay() // 返回一个具体日期中一周的第几天，0 表示星期天
let j = 1,setMonth = true
// 日历
if(weekday === 0) {
  day = day -6
} else {
  day = day - weekday + 1
}
let DaysOfMonth = getDays()
console.log('DaysOfMonth',DaysOfMonth)
// 当日期为下个月的1号时，需要重新设置daynumber,
if(today.getDate() === 1) {
  day = 1
}
for(let i = 0; i< 7; i++) {
  let daynumber = day + i
  if(daynumber > DaysOfMonth) {
    daynumber = j ++
    if(setMonth) {
      today.setMonth(today.getMonth()+1);
      setMonth =   false
    }
  }
  today.setDate(daynumber)
  weekData.push({
    week: weekDayInfo[i],
    day: today.getDate(),
    today: JSON.parse(JSON.stringify(today))
  })
}

//获取当前月份的总天数
function getDays(){
  var date=new Date();
  //将当前月份加1，下移到下一个月
  date.setMonth(date.getMonth()+1);
  //将当前的日期置为0，
  date.setDate(0);
  //再获取天数即取上个月的最后一天的天数
  var days=date.getDate();
  return days;
}
/**
* 获取某个月的总天数
* 
*/

console.log('weekData:', weekData)