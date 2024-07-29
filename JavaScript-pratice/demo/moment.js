const moment = require('moment');
const TIME_SCALE_UNIT = 1

const now = moment().subtract(TIME_SCALE_UNIT, 'minutes');
console.log(now,moment());


let addDialogContent = {
    title: "列席"
}
let maxlength=addDialogContent.title === '新增会议室类型' ? 6 : (addDialogContent.title === '列席' ? 100 : 10)
console.log(maxlength)

let ids = [""]
let map = new Map()
// for(let id of ids) {
//     map.set(id,0)
// }
map.set("aa",1)
map.set("bb",1)
map.set("dd",0)
const x = []
let key;
let map2 = new Map()
console.log(map2.size)
map.forEach((value, k) =>{
    if (value === 0) {
      key = k;
      map.set(key,1)
      map2 = map
      x.push(key)
    }
  });
  console.log(map2);
  console.log(map);
  console.log(x);
  