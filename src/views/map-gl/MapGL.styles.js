import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  position: relative;
  width: 100vw;
`;

export const Button = styled.button`
  background-color: #818181ed;
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 0.95rem;
  height: 45px;
  margin-right: 20px;
  margin-top: 20px;
  outline: none;
  position: absolute;
  right: 0;
  top: 0;
  width: 130px;

  &:hover {
    background-color: #818181;
  }

  &:active {
    background-color: #6d6b6b;
  }
`;
