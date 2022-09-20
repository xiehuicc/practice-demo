const async = require('async');
const baiduurl = 'https://www.baidu.com/';
var concurrencyCount = 0;

fetchUrl = (url, callback) => {
    const delay = parseInt((Math.random() * 10000000) % 2000, 10);
    concurrencyCount++;
    console.log('现在并发数', concurrencyCount, '， 正抓取', url, ', 耗时 ', delay, '毫秒');
    setTimeout(() => {
        concurrencyCount--;
        callback(null, url + ' html content'); // 第一个项是错误，第二个是对象
    }, delay);
};

const urls = [];
for (var i = 0; i < 50; i++) {
    urls.push(baiduurl + '_' + i);
}

/**
 * mapLimit(coll, limit, iteratee, callback opt)
 * coll:  要迭代的集合
 * limit: 一次异步操作最大数量
 * iteratee：对于coll中每一个item，迭代执行该函数，用(item,callback)调用，callback可选 。
 * callback：所有iteratee 函数完成后或发生错误时触发的回调函数。用(err, results)调用。results可以是iteratee 函数完成后触发callback时传递的项。
 */
async.mapLimit(urls, 10, (url, callback) => {
    fetchUrl(url, callback)
}, (err, result) => { // 所有都执行完才会执行
    console.log('result = ', result);
})