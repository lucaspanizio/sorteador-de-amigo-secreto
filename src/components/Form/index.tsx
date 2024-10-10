import { useRef, useState } from 'react';
import { useAttendees } from '@/hooks/useAttendees';
import * as S from './styles';

export const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState('');
  const { addAttendee, error } = useAttendees();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addAttendee(name);
    setName('');
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <S.Input
        ref={inputRef}
        type="text"
        value={name}
        placeholder="Insira os nomes dos participantes"
        onChange={(e) => setName(e.target.value)}
      />
      <S.Button type="submit" disabled={!name}>
        Adicionar
      </S.Button>

      {error && <S.Alert role="alert">{error}</S.Alert>}
    </form>
  );
};
