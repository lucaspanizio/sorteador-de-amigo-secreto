import { useAttendees } from '@/hooks/useAttendees';
import * as S from './styles';

export const AttendeesList = () => {
  const { attendees } = useAttendees();

  return (
    <S.Wrapper>
      <S.Container>
        {attendees.map((attendee) => (
          <S.ListItem key={attendee}>{attendee}</S.ListItem>
        ))}
      </S.Container>
    </S.Wrapper>
  );
};
