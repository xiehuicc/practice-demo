// 获取当前周从星期一到星期天的日期
function getDates() {
  let currentDate = new Date('2022-10-1')
  let timesStamp = currentDate.getTime(); // 返回的是毫秒数
  let currenDay = currentDate.getDay();
  const weekDayInfo = ["周一", "周二", "周三", "周四", "周五", "周六","周日"]
  let dates = [];
  for (let i = 0; i < 7; i++) {
    let day = new Date(timesStamp + 24 * 60 * 60 * 1000 * (i - (currenDay + 6) % 7)).toLocaleDateString().replace(/\//g, '-')
    dates.push({
      weekday: weekDayInfo[i],
      day,
      time: new Date(day)
    })
  }
  return dates
}

console.log(getDates())