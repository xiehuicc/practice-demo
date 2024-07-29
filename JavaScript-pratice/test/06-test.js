import fs from 'fs';
// let data = {
//   "tenant_id": "63f5de1c80126100d02bdd05",
//   "personIDs": [ "6441f3259bf37900123c4456" ],
//   "messageType": "orderMeetingView",
//   "areas": "64360cd761f9a00058e7287a",
//   "spaceUnits": [ ""],
//   "message": {
//     "_id": "6448950fb4004e19b8e16fd4",
//     "cfrm_Id": "64479c20bb4323292f103003",
//     "cfr_theme": "啊豆腐干士大夫",
//     "cfr_date": "2023-04-26",
//     "normalTime": { "begin_time": "12:30", "end_time": "13:00" }
//   },
//   "messageDate": "2023-04-26T03:05:51.623Z"
// }
// let msg = data.message
// let date = msg.cfr_date[0] + " " + msg.normalTime.begin_time
// console.log(date)
// const startDate = new Date(date)
let  basePath= 'C:/IDCardPhoto/'
// console.log(startDate)

  try {
    fs.watchFile(`${basePath}/wz.txt`, { interval: 0 }, () => {
      console.log(1111);
      fs.readFile(`${basePath}/wz.txt`, (err, data) => {
        console.log(2222);
        if (err) throw err
        console.log('data',data)
      })
    })
  } catch (error) {
    console.log('error',error)
  }
