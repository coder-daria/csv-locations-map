import styled from 'styled-components';

export const Container = styled.li`
  align-item: center;
  background-color: #5f5c6d4a;
  border: 2px solid #5f5c6d;
  cursor: ${({ isSorting }) => (isSorting ? 'grabbing' : 'grab')};
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  list-style: none;
  margin: 5px;
  padding: 5px;
  width: 200px;
`;

export const Label = styled.span`
  font-size: 1.4em;
  text-align: center;
  text-transform: uppercase;

  :nth-child(2) {
    font-size: 2.2em;
  }
`;
