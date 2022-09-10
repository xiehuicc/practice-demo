import superagent from 'superagent'; // (用来发送请求)
import cheerio from 'cheerio'; // (用来发送请求)
const fs = require('fs');

interface Course {
  courseName: string;
  courseType: string;
  coursePrice: string;
}

class Grabcourse {
  private url: string = 'https://coding.imooc.com/?c=fe&sort=0&unlearn=0&page=1';
  private courseItems:Course[] = [];

  //获取要爬取页面的html结构
  async getHtml() {
    const courseHtml = await superagent.get(this.url);
    return courseHtml.text;
  }
  //解析html
  async loadhtml(html: string) {
    return cheerio.load(html);
  }
  //获取课程信息
  async getCourseInfo($element: any) {
    $element('.course-list li').each((idx: any, ele: any) => {
      const courseName = $element(ele).attr('data-name');
      const courseType = $element(ele).find('.one').text().replace(/\s/g, '');
      const coursePrice = $element(ele).find('.two .price').text();
      this.courseItems.push({
        courseName,
        courseType,
        coursePrice,
      });
    });
    return this.courseItems;
  }
  async saveCourseItems(result: Course[]) {
    const data = {
      course: result
    }
    //保存逻辑
    fs.writeFile('./course.json', JSON.stringify(data), (err: any) => {
      if (err) {
        console.error(err)
        return
      }
      console.log('文件写入成功。')
    })
  }
  async initSpride() {
    const html = await this.getHtml();
    const $element = await this.loadhtml(html);
    const courseItems = await this.getCourseInfo($element);
    this.saveCourseItems(courseItems);
  }
  constructor() {
    this.initSpride();
  }
}

new Grabcourse();