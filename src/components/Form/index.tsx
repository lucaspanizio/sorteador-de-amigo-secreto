import { useAttendees } from '@/hooks/useAttendees';
import { useRef, useState } from 'react';

export const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState('');
  const { addAttendee } = useAttendees();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addAttendee(name);
    setName('');
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={name}
        placeholder="Insira os nomes dos participantes"
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" disabled={!name}>
        Adicionar
      </button>
    </form>
  );
};
