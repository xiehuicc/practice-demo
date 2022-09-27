/* 
  映射类型（Mapped Types）可以基于旧类型创建新类型
  - 当你不想重复自己时，有时一种类型需要基于另一种类型
  常见使用场景：
  - 将现有类型转换为可选的
  - 将现有类型转换为只读的
*/
type Horse = {}

type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse;
};
 
const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
};

// 将原有类型所有属性转为可选的
type Partial1<T> = {
  [P in keyof T]?: T[P];
};
type PartialPerson = Partial<Person>;
// 将原有类型所有属性转为只读的
type Readonly1<T> = {
  readonly [P in keyof T]: T[P];
};