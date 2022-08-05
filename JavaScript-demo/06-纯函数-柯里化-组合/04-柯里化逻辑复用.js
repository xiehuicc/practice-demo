function log(Date,type,info) {
    console.log(`[${Date.getFullYear()}-${Date.getDate()}-${Date.getHours()}:${Date.getMinutes()}]-[${type}]-${info}`);
}

const date = new Date()
console.log(log(new Date(),'debugger','nihao debugger'))
console.log(log(new Date(),'Info','数据加载成功'))
console.log(log(new Date(),'warning','警告'))

// 柯里化
const log2 = Date => type => info => {
    console.log(`[${Date.getFullYear()}-${Date.getDate()}-${Date.getHours()}:${Date.getMinutes()}]-[${type}]-${info}`);
}
// 如果我现在打印的都是当前时间
let nowLog = log2(new Date())
// 通过返回的函数，根据需要调用 只需要传入type和info参数即可
nowLog("debugger")('nihao debugger')
nowLog("Info")('数据加载成功')

let nowAnddebugLog = log2(new Date())('debugger')
// 只需传入info 参数
nowAnddebugLog('nihao debugger message')
nowAnddebugLog('数据正在加载中。。。')
