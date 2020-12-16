import { userName } from './utils';

let CONSTANT = {
  userName
}

export const setConstants = (params) => {
  CONSTANT = { ...CONSTANT, ...params };
}

export const getConstants = () => {
  return CONSTANT;
}