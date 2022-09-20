const bar = require('./bar')

console.log(bar.name)
console.log(bar.age);
setTimeout(()=> {
  console.log(bar.name)
},2000)