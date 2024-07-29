/* 
  优势:

    - 确保一个类只有一个实例,从而减少内存开销和全局访问点。
    - 提供了对唯一实例的受控访问。
    - 在需要频繁创建和销毁对象的场景下,单例模式可以提高性能。

    缺点:

    - 全局访问点违背了关注点分离的原则,可能会使代码耦合性增强。
    - 如果不当使用,可能会隐藏类之间的依赖关系。
    - 单例模式不容易进行单元测试。
  例子:
    一个常见的单例模式应用场景是日志记录器。
    我们可以使用单例模式来确保日志记录器在整个应用程序中只有一个实例,从而避免重复记录日志。
*/

class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    this.logs = [];
    Logger.instance = this;
  }

  log(message) {
    this.logs.push(message);
    console.log(message);
  }

  getLogs() {
    return this.logs;
  }
}

// 使用
const logger1 = new Logger();
logger1.log('Hello');
const logger2 = new Logger();
logger2.log('World');
console.log(logger1.getLogs()); // ['Hello', 'World']
console.log(logger1 === logger2); // true

exports.Logger = Logger;