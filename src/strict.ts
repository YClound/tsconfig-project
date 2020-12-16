/**
 * @name 校验 strictNullChecks
 * @description 开启 strictNullChecks, ts 对于 null 和 undefined 作为两个类型来看待
 */
let a = 1;
// a = null; // Type 'null' is not assignable to type 'number'.
// a = undefined; // Type 'undefined' is not assignable to type 'number'.

class A {
  prop?: number; // 等于 prop: number | undefined
}
const inst = new A();
// inst.prop = null; // Type 'null' is not assignable to type 'number | undefined'
inst.prop = undefined;

// 严格模式下，对于可能返回为空的返回值，使用前需要再次判断一次，否则 ts 会报错提示。
const arr = [1, 2, 3];
const target = arr.find(item => item === 3);
// target.toFixed(2); // Object is possibly 'undefined';
target?.toFixed(2);



/**
 * @name 校验 strictFunctionTypes
 * @description 当开启的时候，ts 会严格比较函数的类型，指的是参数类型，不包含返回值类型
 */
// type callFunc = (arg: number | string) => boolean | object;
// function testFunc1(arg: number) : boolean {
//   return arg > 3;
// }
// let test1: callFunc = testFunc1; // Type 'string | number' is not assignable to type 'number'.

// 函数参数类型(number | string)是函数类型参数类型(number)的父级 校验通过
type callFunc = (arg: number) => boolean | object;
function testFunc1(arg: number | string): boolean {
  return arg > 3;
}
let test1: callFunc = testFunc1;



/**
 * @name 校验 strictBindCallApply
 * @description 这个配置项主要针对的就是 javascript 内置的三个方法：call、apply、bind
 */
const testBindCallApply = (a: number) => {
  console.log(a);
}
// testBindCallApply.apply(null, [false]) // 不能将类型“boolean”分配给类型“number”
// testBindCallApply.call(null, false) // 类型“boolean”的参数不能赋给类型“number”的参数
// testBindCallApply.bind(null, false) // 类型“boolean”的参数不能赋给类型“number”的参数
testBindCallApply.apply(null, [2])
testBindCallApply.call(null, 2)
testBindCallApply.bind(null, 2)




/**
 * @name 校验 strictPropertyInitialization
 * @description 主要针对成员变量的初始化问题，对于非可选的成员变量没有初始化则报错。
 */
class A1 {
  // prop: string; // Property 'prop' has no initializer and is not definitely assigned in the constructor.
}

class B {
  prop: string;
  constructor() {
    this.prop = '20';
  }
}

class C {
  prop!: string

  getProp() {
    return this.prop.toLowerCase();
  }
}



/**
 * @name 校验 noImplicitThis
 * @description 如果 this 被推断成 any 类型则报错。
 */
class Base {
  width = 3
  height = 4

  getArea() {
    // 'this' implicitly has type 'any' because it does not have a type annotation
    // return function () {
    //   return this.width * this.height
    // }
    return () => {
      if (this.width && this.height) {
        return this.width * this.height
      }

      return 0;
    }
  }
}

export = a // 提供 "--isolatedModules" 标志时，所有文件都必须是模块
// module.exports = { a };




