import * as S from './styles';

export const Header = () => {
  return (
    <S.Header>
      <S.Logo role="img" aria-label="Logo do Sorteador" />
      <S.Image
        src="images/participante.png"
        alt="Participante com um presente na mão"
      />
    </S.Header>
  );
};
