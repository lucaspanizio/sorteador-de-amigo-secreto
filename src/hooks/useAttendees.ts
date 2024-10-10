import { useRecoilState } from 'recoil';
import { attendeesList, errorState } from '@/store/atendees';

export const useAttendees = () => {
  const [attendees, setAttendees] = useRecoilState(attendeesList);
  const [error, setError] = useRecoilState(errorState);

  const addAttendee = (name: string) => {
    if (attendees.includes(name)) {
      setError('Nomes duplicados não são permitidos!');
      setTimeout(() => setError(''), 2000);
      return;
    }
    setAttendees((attendees) => [...attendees, name]);
  };

  const updateError = (newError: string) => {
    setError(newError);
  };

  return { error, attendees, addAttendee, updateError };
};
