import { useNavigate } from 'react-router-dom';
import { useAttendees } from '@/hooks/useAttendees';
import * as S from './styles';

export const Button = () => {
  const { attendees } = useAttendees();
  const navigate = useNavigate();

  const goToDrawPage = () => {
    navigate('/sorteio');
  };

  return (
    <S.Button disabled={attendees.length < 3} onClick={goToDrawPage}>
      Iniciar brincadeira!
    </S.Button>
  );
};
