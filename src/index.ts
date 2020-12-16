import '@babel/polyfill';
import { dependent, getName } from '@/dependent';

const b = { a: '111111' };
const d = Object.assign(b, { c: '333333' });

const f = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
console.log(f.get('Michael'), dependent, d, getName('1111').then(data => { console.log('data:', data) }));

export { b }

getName('222222').finally(() => {
  console.log('finally');
})

const proxyContruct = {};
export const proxy = new Proxy({}, proxyContruct)

// 迭代器降级支持
console.log([...Array(3).keys()])

import { getUserName } from '@/testDownlevelIteration';
getUserName(1);


import testDecorators from '@/testDecorators';
console.log('装饰器：', testDecorators)

// import { setConstants, getConstants } from '../references/index';
// setConstants({ uid: '222222222' })
// console.log('references：', getConstants())

import { Apple } from '@/testEsModuleInterop';

console.log(Apple)
