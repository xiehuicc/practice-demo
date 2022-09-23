/// <reference path="components.ts"/>

// Component需要在index.html中引入，或者在tsconfig.json文件修改outFile配置
namespace Home{
  export class Page{
    user: Component.User = {
      name: "codewhy",
    };
    constructor(){
      new Component.Header();
      new Component.Content();
      new Component.Footer();
    }
  }
}
