export const dependent:number = 20;
const d = Object.assign({a: 11111}, { c: '333333' });

console.log(d, '222222')

const c = (a, c?) => {
  return new Promise((resolve) => {
    resolve(a)
  })
}

// 获取名字
export async function getName(a) {
  const d = await c(a);
  console.log(d)
  return d;
}

