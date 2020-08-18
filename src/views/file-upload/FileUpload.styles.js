import styled from 'styled-components';

const COLOR = '#5F5C6D';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const StyledFileUpload = styled.div`
  align-items: center;
  border-radius: 5px;
  border: 2px solid ${COLOR};
  color: ${COLOR};
  display: flex;
  font-size: 1.5rem;
  height: 80px;
  justify-content: center;
  position: relative;
  width: 200px;

  input {
    cursor: pointer;
    height: 100%;
    opacity: 0;
    position: absolute;
    width: 100%;
  }

  &:hover {
    background-color: #faf8ff;
    background-color: #faf8ff;
`;

export const ErrorMessage = styled.div`
  color: #9e4040;
  font-size: 1.1rem;
  height: 100px;
  padding-top: 20px;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  width: 470px;
  text-align: center;
`;
