import { FormEvent, useState } from 'react';
import { useAttendees } from '@/hooks/useAttendees';
import { useResult } from '@/hooks/useResult';
import * as S from './styles';

export const Sorteio = () => {
  const { result } = useResult();
  const { attendees } = useAttendees();

  const [actualAttendee, setActualAttendee] = useState('');
  const [secretSanta, setSecretSanta] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (result?.has(actualAttendee)) {
      setSecretSanta(result.get(actualAttendee)!);

      setTimeout(() => {
        setSecretSanta('');
        setActualAttendee('');
      }, 5000);
    }
  };

  return (
    <section>
      <h1>Quem vai tirar o papelzinho?</h1>
      <form onSubmit={handleSubmit}>
        <S.Select
          value={actualAttendee}
          onChange={({ target }) => setActualAttendee(target.value)}
        >
          <option value="">Selecione um nome</option>
          {attendees.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </S.Select>

        <S.OrientationText>
          Clique em sortear para ver quem será seu amigo secreto!
        </S.OrientationText>

        {actualAttendee && secretSanta && (
          <S.SecretSanta role="alert">{secretSanta}</S.SecretSanta>
        )}

        <S.Footer>
          <S.Button type="submit" disabled={!actualAttendee}>
            <img
              src="/images/dado-branco.png"
              alt="Desenho de um dado branco"
              width="30px"
            />
            <span>Sortear!</span>
          </S.Button>
          <img src="/images/aviao.png" alt="Desenho de um avião de papel" />
        </S.Footer>
      </form>
    </section>
  );
};
