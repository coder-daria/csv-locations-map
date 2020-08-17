import styled from "styled-components";

export const Container = styled.li`
  align-item: center;
  background-color: rgba(244, 220, 220, 0.2);
  border: 2px solid white;
  cursor: ${({ isSorting }) => isSorting ? 'grabbing' : 'grab'};
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  justify-content: space-between;
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
