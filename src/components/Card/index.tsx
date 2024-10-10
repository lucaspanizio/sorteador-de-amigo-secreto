import { PropsWithChildren } from 'react';
import * as S from './styles';

export const Card = ({ children }: PropsWithChildren) => {
  return <S.Container>{children}</S.Container>;
};
