import { proxy } from '@/index';
const a: string = '22222';

const promise = () => {
  return new Promise((resolve) => {
    resolve();
  })
}

const b = { a: '111111' };
const c = { ...b, d: 2 };
const d = Object.assign(b, { c: '333333' });

// export { a }

console.log(proxy);