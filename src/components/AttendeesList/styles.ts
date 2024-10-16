import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;

  display: flex;
  align-items: center;

  margin: 20px 0;
  min-height: 80px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 45px;
  box-shadow: 2px 2px 0px 1px #000000;

  p {
    align-self: center;
    padding-left: 1.5rem;
    font-size: 18px;
    color: #c6c6c6;
  }

  @media screen and (min-width: 800px) {
    p {
      padding-left: 2rem;
    }
  }
`;

export const Container = styled.ul`
  position: absolute;
  border-radius: 45px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem;
  background-color: #fff;
  width: 95.5%;
  height: 100%;
  gap: 0.75rem;
  max-height: 52px;

  @media screen and (max-width: 800px) {
    position: relative;
    max-height: 120px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const ListItem = styled.li`
  background-color: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 45px;
  font-size: 18px;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #e2e6ea;
    transform: translateY(-3px);
    border: 1px solid #fe652b;
  }
`;
