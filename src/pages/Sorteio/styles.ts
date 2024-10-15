import styled from 'styled-components';

export const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url('data:image/svg+xml,%3Csvg%20width%3D%22800px%22%20height%3D%22800px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5.70711%209.71069C5.31658%2010.1012%205.31658%2010.7344%205.70711%2011.1249L10.5993%2016.0123C11.3805%2016.7927%2012.6463%2016.7924%2013.4271%2016.0117L18.3174%2011.1213C18.708%2010.7308%2018.708%2010.0976%2018.3174%209.70708C17.9269%209.31655%2017.2937%209.31655%2016.9032%209.70708L12.7176%2013.8927C12.3271%2014.2833%2011.6939%2014.2832%2011.3034%2013.8927L7.12132%209.71069C6.7308%209.32016%206.09763%209.32016%205.70711%209.71069Z%22%20fill%3D%22%230F0F0F%22%2F%3E%3C%2Fsvg%3E')
    no-repeat right 30px center;
  background-size: 25px;

  border-radius: 45px;
  height: 82px;
  width: 70%;
  box-sizing: border-box;
  padding: 0 32px;
  font-size: 20px;
  border: 2px solid black;
  box-shadow: 0px 2px 0px 1px #000000;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 225px;
  height: 80px;
  font-size: 20px;
  box-shadow: 2px 2px 0px 1px #000000;
  border-radius: 45px;
  background-color: #fe652b;
  color: #fff;
  cursor: pointer;

  gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #4b69fd;
  }

  @media screen and (max-width: 800px) {
    width: 220px;
    margin: 32px 0;
  }
`;

export const OrientationText = styled.p`
  font-size: 20px;
  font-weight: 200;
  margin: 32px 0;
`;

export const SecretSanta = styled.p`
  color: #fe652bfc;
  font-size: 25px;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;
`;
