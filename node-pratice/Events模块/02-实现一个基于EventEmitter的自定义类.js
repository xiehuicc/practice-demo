/* 
  * 例子：展示如何基于EvnetEmitter自定义类，在不同 事件触发相应的事件，通过监听事件来做一些事情
*/

const EventEmitter = require('events')

const oneDayPlanRun = {
  '6:00': function () {
    console.log('现在是早上6:00，起床，开始新的一天');
  },
  '7:00': function () {
    console.log('现在是早上7:00，开始早餐');
  }
}

function OneDayPlan() { 
  EventEmitter.call(this)
}

//为通过原型继承创建一个新对象,也就是 oneDayPlan 对象继承了 EventEmitter 在原型中定义的函数，
// 也就拥有了 EventEmitter 事件触发器中的 on、emit 等方法。
Object.setPrototypeOf(OneDayPlan.prototype, EventEmitter.prototype)
Object.setPrototypeOf(OneDayPlan, EventEmitter)

// 实例化上面自定义的 OneDayPlan 类，实现事件的触发/监听
const oneDayPlan = new OneDayPlan()

oneDayPlan.on('6:00',function() {
  oneDayPlanRun['6:00']()
})

oneDayPlan.on('7:00', function () {
  oneDayPlanRun['7:00']()
})

async function doMain() {
  oneDayPlan.emit('6:00')
  await sleep(2000)
  oneDayPlan.emit('7:00')
}

doMain()

// node中实现睡眠
async function sleep(s) {
  return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(s);
      }, s);
  });
}