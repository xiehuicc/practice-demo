function test(callback) {
  console.log(callback)
  callback('hello')
}

// test(res=> {
//   console.log(res)
// })
test( function demo(res) {
  console.log(res)
})