import { useAttendees } from '@/hooks/useAttendees';
import * as S from './styles';

export const AttendeesList = () => {
  const { attendees } = useAttendees();
  const hasAttendees = attendees.length === 0;

  return (
    <S.Wrapper>
      {hasAttendees ? (
        <p>Nenhum participante adicionado ...</p>
      ) : (
        <S.Container>
          {attendees.map((attendee) => (
            <S.ListItem key={attendee}>{attendee}</S.ListItem>
          ))}
        </S.Container>
      )}
    </S.Wrapper>
  );
};
