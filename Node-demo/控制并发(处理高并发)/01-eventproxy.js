var eventproxy = require('eventproxy');
var superagent = require('superagent');
var cheerio = require('cheerio');
var url = require('url');

var cnodeUrl = 'https://cnodejs.org/';

superagent.get(cnodeUrl).end((err, res) => {
    if (err) {
        console.error(err);
        return
    }
    const topicUrl = [];
    const $ = cheerio.load(res.text);

    // console.log('toplist = ',$('#topic_list .topic_title'))
    $('#topic_list .topic_title').each((id, element) => {
        const $element = $(element);
        // console.log($element);
        const href = url.resolve(cnodeUrl, $element.attr('href'));
        topicUrl.push(href);
    });
    console.log('topic url: ', topicUrl)
    const ep = new eventproxy();
    //after方法适合重复的操作，比如读取10个文件，调用5次数据库等。将handler注册到N次相同事件的触发上。达到指定的触发数，handler将会被调用执行，每次触发的数据，将会按触发顺序，存为数组作为参数传入。
    ep.after('topic_html', topicUrl.length, (topics) => {
        topics = topics.map((pairs) => {
            const topicUrl = pairs[0];
            const topicHtml = pairs[1];
            const $ = cheerio.load(topicHtml);
            return ({
                title: $('.topic_full_title').text().trim(),
                href: topicUrl,
                comment: $('.reply_content').eq(0).text().trim()
            });
        });
        console.log('topics = ', topics);
    });
    topicUrl.map((url) => {
        superagent.get(url).end((err, res) => {
          if(res?.text) {
            ep.emit('topic_html', [url, res.text]);
          }
        });
    });
});