import { Form } from '@/components/Form';
import { AttendeesList } from '@/components/AttendeesList';
import { Button } from '@/components/Button';
import * as S from './styles';

export const Inicial: React.FC = () => {
  return (
    <section>
      <h2>Vamos começar!</h2>
      <Form />
      <AttendeesList />
      <S.Footer>
        <Button />
        <img src="/images/sacolas.png" alt="Sacolas de compras" />
      </S.Footer>
    </section>
  );
};
