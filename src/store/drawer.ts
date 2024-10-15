import { atom } from 'recoil';

export const attendeesState = atom<string[]>({
  key: 'attendeesState',
  default: [],
});

export const resultState = atom<Map<string, string>>({
  key: 'resultState',
  default: new Map(),
});

export const errorState = atom<string>({
  key: 'errorState',
  default: '',
});
