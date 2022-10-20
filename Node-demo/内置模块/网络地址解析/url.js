/* 
url模块三个方法分别是：
  .parse(urlString)：将url字符串，解析成object，便于开发者进行操作。
  .format(urlObj)：.parse() 方法的反向操作。
  .resove(from, to)：以from作为起始地址，解析出完整的目标地址（还是看直接看例子好些） 
*/

// 1. url.parse(urlString[, parseQueryString[, slashesDenoteHost]])
const url = require('url')
const str = 'http://Chyingp:HelloWorld@ke.qq.com:8080/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1#part=1'
debugger
// const str2 = 'https://nx-test.ctron.com.cn/main/home?id_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdW1lciI6InVzZXJfY29tbW9uIiwiYWNjb3VudF9pZCI6IjYzNDBjZGNmMzk1ZGEzMDAxMmMxYjMwYiIsImlkZW50aXR5SWQiOiI2MzQwY2RjZjM5NWRhMzAwMTJjMWIzMGIiLCJ0ZW5hbnRJZCI6IjYzMzNmZDBjYWMyMGQyMDAxMmM4OTdiOCIsInRlbmFudE5hbWUiOiLlhpznrqHnkIYiLCJ0ZW5hbnRJZGVudGl0eSI6Im54IiwicGVvcGxlSWQiOiI2MzQwY2RjZjM5NWRhMzAwMTJjMWIzMGIiLCJuYW1lIjoi6LCi6L6JIiwidGVsIjoiMTUwNzk1NDk0NzEiLCJjbGllbnRUeXBlIjoxLCJleHBpcmVkX3RpbWUiOiIyMDIyLTEwLTE5IDE4OjQ2OjI2IiwiZXhwIjoxNjY2MTc2Mzg2LCJpYXQiOjE2NjYxNDc1ODZ9.M4l13gGkK85GHoiLDC_GZCX8KtxQ7TSTv8Uz2En0PmI&refresh_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiNjM0MGNkY2YzOTVkYTMwMDEyYzFiMzBiIiwiZXhwaXJlZF90aW1lIjoiMjAyMi0xMC0yNiAxMDo0NjoyNiIsImlhdCI6MTY2NjE0NzU4Nn0.LWiIk1SaSKkXaQ1gj1RCatceCr8TehSUFKT69Xl1Q9I&people_id=6340cdcf395da30012c1b30b&identity_id=6340cdcf395da30012c1b30b&tenant_id=6333fd0cac20d20012c897b8'

// 参数值不解析
const obj =url.parse(str)
const obj1 = url.parse(str,true)
// const obj2 =url.parse(str2)
console.log(obj,obj1)

// 2. url拼接：url.format(urlObject)

// 3. url.resolve(from, to)
const path1 = url.resolve('/one/two/three', 'four')         // '/one/two/four'
const path2 = url.resolve('http://example.com/', '/one')    // 'http://example.com/one'
const path3 = url.resolve('http://example.com/one/', '/two') // 'http://example.com/two'
console.log(path1,path2,path3)