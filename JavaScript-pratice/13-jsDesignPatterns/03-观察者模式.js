/* 
  优势:

    实现了观察者和被观察者之间的松耦合,提高了代码的灵活性和可维护性。
    被观察者不需要知道观察者的具体实现,只需要维护一个观察者列表即可。
    可以实现一对多的依赖关系,当被观察者的状态发生变化时,所有的观察者都会得到通知。

  缺点:

    如果观察者过多,会增加系统的复杂性和通信开销。
    观察者之间可能存在循环依赖,需要注意避免。
    观察者模式破坏了封装性,被观察者暴露了自己的状态变化。
  例子:
    一个常见的例子是,在一个聊天应用中,当某个用户发送消息时,其他在线用户都应该收到通知。我们可以使用观察者模式来实现这个功能。
*/

// 主题(被观察者)
class Subject {
  constructor() {
    this.observers = [];
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify() {
    this.observers.forEach(observer => observer.update(this));
  }
}

// 观察者
class Observer {
  constructor(name) {
    this.name = name;
  }

  update(subject) {
    console.log(`${this.name} received update from ${subject.constructor.name}`);
  }
}

// 使用
const subject = new Subject();

const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

subject.attach(observer1);
subject.attach(observer2);

subject.notify(); // Output: Observer 1 received update from Subject, Observer 2 received update from Subject

subject.detach(observer1);

subject.notify(); // Output: Observer 2 received update from Subject