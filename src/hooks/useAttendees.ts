import { useRecoilState } from 'recoil';
import { attendeesList } from '@/store/atendees';

export const useAttendees = () => {
  const [attendees, setAttendees] = useRecoilState(attendeesList);

  const addAttendee = (name: string) => {
    setAttendees((attendees) => [...attendees, name]);
  };

  return { attendees, addAttendee };
};
