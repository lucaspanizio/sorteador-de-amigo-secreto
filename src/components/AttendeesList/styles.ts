import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid #ced4da;
  border-radius: 20px;
  overflow: hidden;
  padding-right: 2px;
  margin: 20px 0;
  background-color: #f8f9fa;
  box-shadow: 2px 2px 0px 1px #000000;
`;

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  max-height: 130px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1.2rem 1rem;
  gap: 0.75rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    right: 3rem;
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
  border-radius: 10px;
  font-size: 18px;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #e2e6ea;
    transform: translateY(-3px);
  }
`;
