const async = require('async');
const fs = require('fs');
let q = async.queue(function (file,callback) {
  let fileData = fs.readFile(file,'utf8',callback);
  console.log('fileData',fileData);
},2)

// assign a callback
q.drain(function() {
  console.log('all Task finished')
})


const files = fs.readdirSync('../../Stream')

files.forEach(file => {
  // add some items to the queue
  q.push(file,function(err,data) {
    // TODO
  })
})
