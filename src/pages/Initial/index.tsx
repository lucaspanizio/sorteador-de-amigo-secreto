import { Form } from '@/components/Form';
import { AttendeesList } from '@/components/AttendeesList';
import { useAttendees } from '@/hooks/useAttendees';
import { useNavigate } from 'react-router-dom';
import { useDrawer } from '@/hooks/useDrawer';
import * as S from './styles';

export const Initial = () => {
  const { attendees } = useAttendees();
  const navigate = useNavigate();
  const draw = useDrawer();

  const startGame = () => {
    draw();
    navigate('/sorteio');
  };

  return (
    <section>
      <h1>Vamos começar!</h1>
      <Form />
      <AttendeesList />
      <S.Footer>
        <S.Button
          data-testid="btnIniciar"
          disabled={attendees.length < 3}
          onClick={startGame}
        >
          Iniciar brincadeira!
        </S.Button>
        <img src="/images/sacolas.png" alt="Sacolas de compras" width="150px" />
      </S.Footer>
    </section>
  );
};
