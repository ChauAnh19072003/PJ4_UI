import { atom } from 'recoil';

export const myAtom = atom({
  key: 'myAtom',
  default: null,
  uniqueKey: false, 
});
