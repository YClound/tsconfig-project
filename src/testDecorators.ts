/**
 * @name 装饰器（experimentalDecorators）
 * experimentalDecorators: false, // 对修饰器的实验支持功能在将来的版本中可能更改
 */

import 'reflect-metadata';

function isAnimal(is) {
  return function (target: Function) {
    console.log(target)
    target.prototype.isAnimal = is;
  }
}

@isAnimal(true)
class Animal {
  isAnimal?: boolean;
  constructor() {

  }
}

const cat = new Animal();
console.log("cat.isAnimal：", cat.isAnimal)

export = Animal;


/**
 * @name emitDecoratorMetadata
 * @description 为装饰器添加元数据
 */
@Reflect.metadata('role', 'admin')
class Post { }

console.log('metadata：', Reflect.getMetadata('role', Post))