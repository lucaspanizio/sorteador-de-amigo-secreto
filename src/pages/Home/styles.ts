import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;

    img {
      margin-top: 32px;
    }
  }
`;
