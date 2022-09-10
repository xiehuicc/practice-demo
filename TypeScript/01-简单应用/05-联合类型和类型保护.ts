interface Bird {
  fly: boolean;
  sing: () => {};
}

interface Dog {
  fly: boolean;
  bark: () => {};
}

// 类型断言方式 进行类型保护
function trainAnimal(animal: Bird | Dog) {
  // animal.sing();  // 如果传入的是Dog 则animal没有sing()方法
  if(animal.fly) {
    (animal as Bird).sing();
  }
  if(animal.fly) {
    (animal as Dog).bark();
  }
}

// in 语法来做类型保护
function trainAnimalSecond(animal: Bird | Dog) {
  if('sing' in animal) {
    animal.sing();
  } else {
    animal.bark();
  }
}

// typeof 做类型保护
function addFirst(firstNumber: string | number, secondNumber: string | number) {
  if(typeof firstNumber === 'string' || typeof secondNumber === 'string') {
    return `${firstNumber}${secondNumber}`
  }
  return firstNumber + secondNumber
}

// 使用instanceof 类型保护，（NumberObj必须是一个类，只有类才具备使用instanceof操作符）
class NumberObj {
  count: number; 
}

function addSecond(firstNumber: object| NumberObj, secondNumber: object | NumberObj) {
  if(firstNumber instanceof NumberObj && secondNumber instanceof NumberObj) {
    return firstNumber.count + secondNumber.count
  } 
  return 0;
}