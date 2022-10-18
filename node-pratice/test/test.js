class device{
  // #开头的是私有属性
  #id
  #ticket
  constructor(id) {
    this.#id = id
  }
  static go() {
    console.log('gogogoogo')
  }
  test() {
    return this.#id
  }
  run() {
    console.log('runrunrun --')
  }
}
device.go()

const dd = new device('dj')
// 为什么dd这个对象上打印是空对象，没有类上的方法
console.log(dd)
console.log(dd.run())