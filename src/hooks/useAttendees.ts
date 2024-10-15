import { useRecoilState } from 'recoil';
import { attendeesState, errorState, resultState } from '@/store/drawer';
import { useError } from './useError';

export const useAttendees = () => {
  const [attendees, setAttendees] = useRecoilState(attendeesState);
  const { updateError } = useError();

  const addAttendee = (name: string) => {
    if (attendees.includes(name)) {
      updateError('Nomes duplicados não são permitidos!');
      setTimeout(() => updateError(''), 2000);
      return;
    }
    setAttendees((attendees) => [...attendees, name]);
  };

  return { attendees, addAttendee };
};
