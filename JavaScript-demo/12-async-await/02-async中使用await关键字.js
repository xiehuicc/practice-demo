async function foo () {
  const res1 =  await {
    then: function(resolve, reject) {
      resolve(123)
    }
  }
  console.log('11111111')
  return res1
}

foo().then(res=> {
  console.log(res)
})