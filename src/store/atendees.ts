import { atom } from 'recoil';

export const attendeesList = atom<string[]>({
  key: 'attendeesList',
  default: [],
});
