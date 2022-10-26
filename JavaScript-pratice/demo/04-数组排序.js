formlist = [
  {title:'系统提醒',todo_deadline:'2022-10-26',content:'您有一条待处理委托'},
  {title:'系统提醒',todo_deadline:'2022-10-17',content:'您有一条待处理委托'},
  {title:'系统提醒',todo_deadline:'2022-10-12',content:'您有一条待处理砼施工委托'}
]
  
function MsgSort(formlist){
  formlist.sort((a,b)=>{
    let t1 = new Date(Date.parse(a.todo_deadline.replace(/-/g,"/")))
    let t2 = new Date(Date.parse(b.todo_deadline.replace(/-/g,"/")))
    return t1.getTime()-t2.getTime()
  })
  console.log(formlist)
  return formlist
}
MsgSort(formlist)
