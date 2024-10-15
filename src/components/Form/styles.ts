import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  border-top-left-radius: 45px;
  border-bottom-left-radius: 45px;
  height: 82px;
  width: 70%;
  box-sizing: border-box;
  font-size: 20px;
  border: 2px solid black;
  margin-bottom: 1rem;
  box-shadow: 0px 2px 0px 1px #000000;

  padding-left: 80px;
  background-image: url('/images/adicionar-participante.png');
  background-size: 30px 24px;
  background-repeat: no-repeat;
  background-position: 36px center;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
    border-radius: 45px;
    box-shadow: 0px 2px 0px 1px #000000;
    margin-bottom: 18px;
  }
`;

export const Button = styled.button`
  border-top-right-radius: 45px;
  border-bottom-right-radius: 45px;
  height: 82px;
  width: 30%;
  box-sizing: border-box;
  border: 2px solid black;
  font-size: 20px;
  color: #000000;
  box-shadow: 2px 2px 0px 1px #000000;
  cursor: pointer;
  background-color: #c4c4c4;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media screen and (max-width: 800px) {
    display: block;
    margin-top: 16px;
    margin: 0 auto;
    width: 220px;
    border-radius: 45px;
  }
`;

export const Alert = styled.p`
  color: #842029;
  background-color: #f8d7da;
  padding: 1rem;
  border: 1px solid #f5c2c7;
  border-radius: 8px;
  margin-top: 2rem;

  @media screen and (max-width: 800px) {
    margin: 3rem 0;
  }
`;
