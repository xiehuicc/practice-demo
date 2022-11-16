/* 
  额外的属性检查
    -检查是否有不在接口定义中的属性，就是额外的属性检查。
*/

interface SquareConfig {
  color: string;
  width: number;
}

function createSquare(config: SquareConfig): { color: string; width: number} {
  return { color: config.color, width: config.width}
}

// let mySquare = createSquare({color: 'red', width: 100});
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
console.log(mySquare)

interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}
// 接口只定义了一个属性label，然后传入了两个属性label和size，为啥就不报错呢？
let myObj = {size: 10, label: "Size 10 Object"}; 
printLabel(myObj);

/* 
  仔细分析了一下两段代码的区别，发现报错的第一个例子中，我们传入函数的是一个类似于{ width: 100, opacity: 0.5 } 的对象字面量（object literal）
  而在第二个不报错的例子中，我们传入的是一个类似于myObj的变量（variable）。
  由此我们可以看到，TypeScript中额外的属性检查只会应用于对象字面量场景，所以，在TS的官方测试用例里面，我们看到的都是objectLiteralExcessProperties.ts。
*/