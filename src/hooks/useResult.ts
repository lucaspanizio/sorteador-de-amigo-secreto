import { useRecoilState } from 'recoil';
import { resultState } from '@/store/drawer';

export const useResult = () => {
  const [result, setResult] = useRecoilState(resultState);

  return { result, setResult };
};
