import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Logo = styled.div`
  background-image: url('/images/logo.png');
  width: 351px;
  height: 117px;

  @media screen and (max-width: 800px) {
    background-image: url('/images/logo-pequeno.png');
    width: 235px;
    height: 199px;
  }
`;

export const Image = styled.img`
  z-index: 1;
`;
