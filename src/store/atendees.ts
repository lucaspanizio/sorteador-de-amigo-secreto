import { atom } from 'recoil';

export const attendeesList = atom<string[]>({
  key: 'attendeesList',
  default: [],
});

export const errorState = atom<string>({
  key: 'errorState',
  default: '',
});
