
/* 
这种回调的方式有很多弊端：
    1. 如果是我们自己封装的requestData，那么我们再封装的时候必须要自己设计好callback名称，并且使用好
    2. 如果我们使用的是别人封装好的requestData或者第三方库，那么我们必须去看第三方文档或源码，才知道函数需要怎么获取结果

*/

// request.js
function requestData(url, sucessCallback,failtureCallback) {
    // 模拟网络请求
    setTimeout(() => {
        if(url === 'codewhy') {
            let name = ['abc','bca','nba']
            // 通过回调方式 将name返回
            sucessCallback(name)
        } else {
            let message = '请求失败,url错误'
            failtureCallback(message)
        }
    },2000)
}

requestData('codewhy',(res) => {
    console.log(res)
},(err) => {
    console.log(err)
})

