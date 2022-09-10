

function decoratorFactory() {
  return function <T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
      name = 'james';
      getName () {
        return this.name
      }
    };
  }
}


const Test4 = decoratorFactory()(
  class {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
)

const test4 = new Test4('why')
console.log(test4.getName())