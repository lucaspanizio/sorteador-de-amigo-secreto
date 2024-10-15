import { useRecoilState } from 'recoil';
import { errorState } from '@/store/drawer';

export const useError = () => {
  const [error, setError] = useRecoilState(errorState);

  const updateError = (newError: string) => {
    setError(newError);
  };

  return { error, updateError };
};
